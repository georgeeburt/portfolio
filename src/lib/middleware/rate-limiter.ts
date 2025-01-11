import { NextRequest } from 'next/server';
import redis from '../config/redis';

const WINDOW_SIZE_IN_SECONDS = 86400;
const MAX_REQUESTS_PER_WINDOW = 3;

const namespace =
  process.env.NODE_ENV === 'development' ? 'test:' : '';

export async function rateLimiter(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'anonymous';
    const key = `${namespace}rate_limit:${ip}`;
    const currentRequestCount = await redis.get(key);

    if (currentRequestCount === null) {
      await redis.setex(key, WINDOW_SIZE_IN_SECONDS, 1);
      return null;
    }

    const count = parseInt(currentRequestCount);
    if (count >= MAX_REQUESTS_PER_WINDOW) {
      return Response.json(
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
    console.error('Rate limiter error:', error);
  }
}
