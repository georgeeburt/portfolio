import { test, expect } from '@playwright/test';
import { Contribution } from '@/types';

test.describe('GitHub Contributions', () => {
  test.setTimeout(60000);
  test('contributions should be displayed and visible', async ({
    page
  }) => {
    await page.goto('/#projects');

    await page.waitForLoadState('networkidle');

    const contributions = page.getByTestId('contributions');
    await contributions.scrollIntoViewIfNeeded();

    await expect(contributions).toBeInViewport();
    await expect(contributions).toBeVisible();
  });

  test('should display correct text for contribution count in the last year', async ({
    page
  }) => {
    await page.goto('/#projects');

    const contributions = page.getByTestId('contributions');

    await page.waitForLoadState('networkidle');

    const content = await contributions.textContent();
    expect(content).toContain(
      `contributions in ${new Date().getFullYear() - 1} & ${new Date().getFullYear()}`
    );
  });

  test('should get cached contribution data from the past year from the server', async ({
    page
  }) => {
    const contributionsPromise = page.waitForResponse(
      (response) =>
        response.url().includes('/api/contributions') &&
        response.status() === 200
    );

    await page.goto('/#projects');
    await page.waitForLoadState('networkidle');

    const response = await contributionsPromise;
    const responseBody = await response.json();
    expect(responseBody.length).toBeGreaterThan(320);
  });

  test('should display the correct number of contributions', async ({
    page
  }) => {
    const contributionsPromise = page.waitForResponse(
      (response) =>
        response.url().includes('/api/contributions') &&
        response.status() === 200
    );

    await page.goto('/#projects');
    await page.waitForLoadState('networkidle');

    const contributionSection = page.getByTestId('contributions');

    const response = await contributionsPromise;
    const responseBody = await response.json();

    const totalContributions = responseBody.reduce(
      (total: number, contribution: Contribution) => {
        return (
          total +
          (isNaN(Number(contribution.count))
            ? 0
            : Number(contribution.count))
        );
      },
      0
    );

    expect(await contributionSection.textContent()).toContain(
      totalContributions.toString()
    );
  });
});
