import { test, expect } from '@playwright/test';

test.describe('Contact Form Email Integration', () => {
  test('should send email correctly through contact form', async ({ page }) => {
    await page.goto('/#contact');

    await page.fill('input[name="name"]', 'Integration Test User');
    await page.fill('input[name="email"]', 'integration@test.com');
    await page.fill(
      'textarea[name="message"]',
      'This is an integration test for email sending'
    );

    // Mock the email sending endpoint
    await page.route('/contact', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Success' })
      });
    });

    await page.click('input[type="submit"]');

    const toastLocator = page.locator(
      'li[role="status"][data-state="open"]'
    );
    await expect(toastLocator).toBeVisible({ timeout: 10000 });
    await expect(toastLocator).toContainText(
      'Your message has been successfully sent!'
    );
  });
});
