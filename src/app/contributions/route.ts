import { NextResponse } from 'next/server';
import type {
  ContributionDay,
  ContributionWeek
} from '@/types/index';

export async function GET() {
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

  try {
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

    const data = weeks.flatMap((week: ContributionWeek) =>
      week.contributionDays.map((day: ContributionDay) => ({
        date: day.date,
        count: day.contributionCount,
        level:
          day.contributionCount > 0
            ? Math.min(Math.floor(day.contributionCount / 5) + 1, 4)
            : 0
      }))
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch contributions', error);
    return NextResponse.json(
      { error: 'Failed to fetch contributions' },
      { status: 500 }
    );
  }
}
