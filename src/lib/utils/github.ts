import type {
  ContributionDay,
  ContributionWeek
} from '@/types/index';
import redis from '../config/redis';

const CACHE_KEY = 'github:contributions';
const CACHE_TTL = 90000;

export async function fetchGithubContributions() {
  const now = new Date();
  const from = new Date(
    now.getFullYear(),
    now.getMonth() - 11,
    1
  ).toISOString();
  const to = now.toISOString();

  const query = `
  query($from: DateTime!, $to: DateTime!) {
    viewer {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
  `;

  const variables = { from, to };

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
  });

  const jsonData = await response.json();
  const weeks =
    jsonData?.data?.viewer?.contributionsCollection
      .contributionCalendar.weeks;

  return weeks.flatMap((week: ContributionWeek) =>
    week.contributionDays.map((day: ContributionDay) => ({
      date: day.date,
      count: day.contributionCount,
      level:
        day.contributionCount > 0
          ? Math.min(Math.floor(day.contributionCount / 5) + 1, 4)
          : 0
    }))
  );
}

export async function getContributionsWithCache() {
  try {
    const cachedData = await redis.get(CACHE_KEY);

    if (cachedData) {
      return JSON.parse(cachedData);
    }

    const data = await fetchGithubContributions();
    await redis.setex(CACHE_KEY, CACHE_TTL, JSON.stringify(data));

    return data;
  } catch (error) {
    throw error;
  }
}
