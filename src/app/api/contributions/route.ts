import { getContributionsWithCache } from '@/lib/utils/github';

export async function GET() {
  try {
    const data = await getContributionsWithCache();
    return Response.json(data);
  } catch (error) {
    console.error('Failed to fetch contributions', error);
    return Response.json(
      { error: 'Failed to fetch contributions' },
      { status: 500 }
    );
  }
}
