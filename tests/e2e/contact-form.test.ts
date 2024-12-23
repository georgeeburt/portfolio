import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#contact');
  });

  test('should show success toast when form submission is successful', async ({
    page
  }) => {
    await page.waitForTimeout(1000);

    await page.route('/contact', async (route) => {
      const request = route.request();
      if (request.method() === 'POST') {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ message: 'Success' })
        });
      } else {
        await route.continue();
      }
    });

    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill(
      'textarea[name="message"]',
      'Test message content'
    );

    await Promise.all([
      page.click('input[type="submit"]'),
      page.waitForLoadState('networkidle')
    ]);

    const toastLocator = page.locator(
      'li[role="status"][data-state="open"]'
    );

    await expect(toastLocator).toBeVisible({ timeout: 10000 });
    await expect(toastLocator).toContainText(
      'Your message has been successfully sent!'
    );
  });

  test('should clear user input on successful form submission', async ({
    page
  }) => {
    await page.route('/contact', (route) => {
      route.fulfill({
        status: 200,
        body: JSON.stringify({ message: 'Success' })
      });
    });

    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill(
      'textarea[name="message"]',
      'Test message content'
    );

    await page.click('input[type="submit"]');
    await page.waitForSelector(
      'li[role="status"][data-state="open"]'
    );

    // Verify form reset
    await expect(page.locator('input[name="name"]')).toHaveValue('');
    await expect(page.locator('input[name="email"]')).toHaveValue('');
    await expect(
      page.locator('textarea[name="message"]')
    ).toHaveValue('');
  });

  test('should show error toast when user misses required fields', async ({
    page
  }) => {
    await page.fill('input[name="name"]', 'George Martin Burt');
    await page.fill('input[name="email"]', 'georgeeburt@icloud.com');

    await page.click('input[type="submit"]', {
      timeout: 10000
    });

    const toastLocator = page.locator('li[role="status"]');
    await toastLocator.waitFor({ state: 'visible', timeout: 10000 });

    await expect(toastLocator).toBeVisible();
    await expect(toastLocator).toContainText(
      'Name, email, and message are all required'
    );
  });

  test('should show error toast when there is a form submission error', async ({
    page
  }) => {
    await page.waitForTimeout(1000);

    await page.fill('input[name="name"]', 't3st');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'Test message');

    await page.route('/contact', async (route) => {
      const request = route.request();
      if (request.method() === 'POST') {
        await route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({
            message:
              'There was an error sending your message, please try again'
          })
        });
      } else {
        await route.continue();
      }
    });

    await Promise.all([
      page.click('input[type="submit"]'),
      page.waitForLoadState('networkidle')
    ]);

    const errorToastLocator = page.locator(
      'li[role="status"][data-state="open"]'
    );

    await expect(errorToastLocator).toBeVisible({ timeout: 10000 });
    await expect(errorToastLocator).toContainText(
      'There was an error sending your message, please try again'
    );
  });
});
