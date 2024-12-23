import { test, expect } from '@playwright/test';
import { SOCIAL_LINKS } from '@/lib/constants/navigation-constants';

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test('should navigate to the about section when the about link is clicked', async ({
    page
  }) => {
    await page.click('a[href="/#about"]');

    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();

    await page.waitForTimeout(1000);
    expect(page.url()).toContain('#about');
  });

  test('should navigate to the skills section when the skills link is clicked', async ({
    page
  }) => {
    await page.click('a[href="/#skills"]');

    const aboutSection = page.locator('#skills');
    await expect(aboutSection).toBeVisible();

    await page.waitForTimeout(1000);
    expect(page.url()).toContain('#skills');
  });

  test('should navigate to the projects section when the project link is clicked', async ({
    page
  }) => {
    await page.click('a[href="/#projects"]');

    const aboutSection = page.locator('#projects');
    await expect(aboutSection).toBeVisible();

    await page.waitForTimeout(1000);
    expect(page.url()).toContain('#projects');
  });

  test('should navigate to the contact section when the contact link is clicked', async ({
    page
  }) => {
    await page.click('a[href="/#contact"]');

    const aboutSection = page.locator('#contact');
    await expect(aboutSection).toBeVisible();

    await page.waitForTimeout(1000);
    expect(page.url()).toContain('#contact');
  });

  test('should navigate to GitHub profile when the GitHub icon is clicked', async ({
    page
  }) => {
    const [newTab] = await Promise.all([
      page.waitForEvent('popup'),
      page.click('img[alt="GitHub logo"]')
    ]);

    await newTab.waitForLoadState();

    expect(newTab.url()).toContain(SOCIAL_LINKS[0].href);
  });

  test('should navigate to LinkedIn profile when the LinkedIn icon is clicked', async ({
    page
  }) => {
    const [newTab] = await Promise.all([
      page.waitForEvent('popup'),
      page.click('img[alt="LinkedIn logo"]')
    ]);

    await newTab.waitForLoadState();

    expect(newTab.url()).toContain(SOCIAL_LINKS[1].href);
  });
});
