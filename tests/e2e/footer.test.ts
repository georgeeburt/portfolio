import { test, expect } from '@playwright/test';

test.describe('Footer', () => {
  test('should contain the current year and appropriate text', async ({
    page
  }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await expect(footer).toContainText(
      `© ${new Date().getFullYear()} George Burt. All rights reserved.`
    );
  });

  test('should contain a button to scroll to the top of the page', async ({
    page
  }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await expect(footer).toContainText('Back to top');
  });

  test('should scroll to the top of the page when the button is clicked', async ({
    page
  }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    const scrollToTopButton = footer.locator('button');

    await scrollToTopButton.click();
    await page.waitForTimeout(1250);

    const scrollPosition = await page.evaluate(() => window.scrollY);
    expect(scrollPosition).toBe(0);
  });
});
