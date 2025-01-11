import { NextRequest } from 'next/server';
import { fetchGithubContributions } from '@/lib/utils/github';
import redis from '@/lib/config/redis';

const CACHE_KEY = 'github:contributions';
const CACHE_TTL = 90000;

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json('Unauthorized', { status: 401 });
  }

  try {
    const freshData = await fetchGithubContributions();
    await redis.setex(
      CACHE_KEY,
      CACHE_TTL,
      JSON.stringify(freshData)
    );

    return Response.json({ success: true });
  } catch (error) {
    console.error('Failed to cache contributions', error);
    return Response.json(
      { error: 'Failed to update contributions cache' },
      { status: 500 }
    );
  }
}
