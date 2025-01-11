import { NextRequest } from 'next/server';
import { getContributionsWithCache } from '@/lib/utils/github';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json('Unauthorized', { status: 401 });
  }

  try {
    await getContributionsWithCache();
    return Response.json({ success: true });
  } catch (error) {
    console.error('Failed to cache contributions', error);
    return Response.json(
      { error: 'Failed to update contributions cache' },
      { status: 500 }
    );
  }
}
