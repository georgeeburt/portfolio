import { test, expect } from '@playwright/test';
import redis from '@/lib/config/redis';

test.describe('Contact Form Rate Limiter', () => {
  const DAILY_LIMIT = 3;

  test.beforeEach(async ({ page }) => {
    const keys = await redis.keys('rate_limit:*');
    if (keys.length > 0) {
      await redis.del(...keys);
    }

    // Mock email sending endpoint
    await page.route('**/contact', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Email mock sent' }),
      });
    });

    await page.setExtraHTTPHeaders({
      'X-Forwarded-For': '127.0.0.1',
    });

    await page.goto('/#contact');
  });

  test('should rate limit user if submissions exceed daily limit', async ({
    page,
  }) => {
    for (let i = 0; i < DAILY_LIMIT; i++) {
      await page.fill('#name', 'Test User');
      await page.fill('#email', 'test@example.com');
      await page.fill('#message', 'Test message');

      const response = await Promise.all([
        page.waitForResponse((res) => res.url().includes('/contact')),
        page.click('input[type="submit"]'),
      ]);

      const responseText = await response[0].text();
      console.log('Response details:', {
        status: response[0].status(),
        body: responseText,
      });

      expect(response[0].ok()).toBe(true);

      // Wait for toast to disappear
      await page.locator('li[role="status"]').waitFor({ state: 'hidden', timeout: 3000 });
    }

    // Next submission should be rate limited
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#message', 'Test message');

    const response = await Promise.all([
      page.waitForResponse((res) => {
        return (
          res.url().includes('/contact') &&
          (res.status() === 429 || res.status() === 200)
        );
      }),
      page.click('input[type="submit"]'),
    ]);

    expect(response[0].status()).toBe(429);

    // Check for rate limit toast
    const rateLimitToast = page.locator('li[role="status"]');
    await expect(rateLimitToast).toBeVisible();
    await expect(rateLimitToast).toContainText('Rate Limit Exceeded');
  });

  test.afterAll(async () => {
    // Clean up Redis after tests
    const keys = await redis.keys('rate_limit:*');
    if (keys.length > 0) {
      await redis.del(...keys);
    }
  });
});