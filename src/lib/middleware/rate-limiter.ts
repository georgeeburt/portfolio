import { NextRequest, NextResponse } from 'next/server';
import redis from '../config/redis';

const WINDOW_SIZE_IN_SECONDS = 86400;
const MAX_REQUESTS_PER_WINDOW = 3;

export async function rateLimiter(request: NextRequest) {
  // Skip rate limiting in development
  if (process.env.NODE_ENV === 'development') {
    return null;
  }
  try {
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'anonymous';
    const key = `rate_limit:${ip}`;

    // Get the current request count for this IP
    const currentRequestCount = await redis.get(key);

    if (currentRequestCount === null) {
      await redis.setex(key, WINDOW_SIZE_IN_SECONDS, 1);
      return null;
    }

    const count = parseInt(currentRequestCount);
    if (count >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { message: 'Rate limit exceeded. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': WINDOW_SIZE_IN_SECONDS.toString()
          }
        }
      );
    }

    await redis.incr(key);
    return null;
  } catch (error) {
    console.error('Rate limiting error:', error);
    return null;
  }
}
