import Redis from 'ioredis';

if (!process.env.REDIS_URL) {
  throw new Error(
    'REDIS_URL is not defined in environment variables'
  );
}

const redis = new Redis(process.env.REDIS_URL, {
  maxRetriesPerRequest: 3,
  retryStrategy(times) {
    const delay = Math.min(times * 50, 2000);
    return delay;
  }
});

redis.on('error', (error) => {
  console.error('Redis client error:', error);
});

redis.on('connect', () => {
  console.log('Successfully connected to Redis');
});

export default redis;
