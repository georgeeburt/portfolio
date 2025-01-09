import { NextResponse } from 'next/server';
import { getContributionsWithCache } from '@/lib/utils/github';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    await getContributionsWithCache();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to cache contributions', error);
    return NextResponse.json(
      { error: 'Failed to update contributions cache' },
      { status: 500 }
    );
  }
}
