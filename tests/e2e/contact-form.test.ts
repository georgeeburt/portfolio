import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#contact');
  });

  test('should show success toast when form submission is successful', async ({
    page,
  }) => {
    await page.fill('input[name="name"]', 'George Martin Burt');
    await page.fill('input[name="email"]', 'georgeeburt@icloud.com');
    await page.fill(
      'textarea[name="message"]',
      'Hello, this is a test message to George!'
    );
    await page.click('input[type="submit"]', { timeout: 20000 });

    const toastLocator = page.locator(
      'li[role="status"][data-state="open"]'
    );
    await toastLocator.waitFor({ state: 'visible', timeout: 10000 });

    await expect(toastLocator).toBeVisible();
    await expect(toastLocator).toContainText(
      'Your message has been successfully sent!'
    );
  });
});
