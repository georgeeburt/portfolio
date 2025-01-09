import { NextResponse } from 'next/server';
import { getContributionsWithCache } from '@/lib/utils/github';

export async function GET() {
  try {
    const data = await getContributionsWithCache();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch contributions', error);
    return NextResponse.json(
      { error: 'Failed to fetch contributions' },
      { status: 500 }
    );
  }
}
