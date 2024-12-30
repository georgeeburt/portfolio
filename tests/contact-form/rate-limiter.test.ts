import { test, expect } from '@playwright/test';
import redis from '@/lib/config/redis';

test.describe('Contact Form Rate Limiter', () => {
  const DAILY_LIMIT = 3;

  test.beforeEach(async ({ page }) => {
    console.log('🏁 Test setup starting...');

    // Clear Redis data
    const keys = await redis.keys('rate_limit:*');
    if (keys.length > 0) {
      await redis.del(...keys);
    }

    // Set IP header
    await page.setExtraHTTPHeaders({
      'X-Forwarded-For': '127.0.0.1'
    });

    // Mock Resend API with more specific matching
    await page.route(/.*api.resend.com\/emails.*/, async (route, request) => {
      console.log('📧 Intercepted Resend API call');
      console.log('Request URL:', request.url());
      console.log('Request method:', request.method());

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 'test-email-id',
          message: 'Success'
        })
      });
      console.log('📨 Sent mock response');
    });

    console.log('✅ Mock setup complete');
    await page.goto('/#contact');
  });

  test('should rate limit user if submissions exceed daily limit', async ({
    page
  }) => {
    for (let i = 0; i < DAILY_LIMIT; i++) {
      await page.fill('#name', 'Test User');
      await page.fill('#email', 'test@example.com');
      await page.fill('#message', 'Test message');

      const response = await Promise.all([
        page.waitForResponse((res) => res.url().includes('/contact')),
        page.click('input[type="submit"]')
      ]);

      const responseStatus = response[0].status();
      const responseText = await response[0].text();
      console.log(`Submission ${i + 1} details:`, {
        status: responseStatus,
        ok: response[0].ok(),
        body: responseText,
        headers: await response[0].allHeaders()
      });

      const redisKey = 'rate_limit:127.0.0.1';
      const count = await redis.get(redisKey);
      console.log('Current Redis count:', count);

      expect(response[0].ok()).toBe(true);

      // Wait for toast to disappear
      await page.waitForTimeout(2000);
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
      page.click('input[type="submit"]')
    ]);

    if (response[0].status() !== 429) {
      const text = await response[0].text();
      console.log('Unexpected response:', text);
      console.log('Response status:', response[0].status());
    }

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
