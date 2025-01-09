import { test, expect } from '@playwright/test';
import { PROJECTS } from '@/lib/constants/projects-constants';

test.describe('Projects Section', () => {
  test('should display the correct number of projects', async ({
    page
  }) => {
    await page.goto('/#projects');

    const projectCards = await page
      .locator('#projects article.project-card')
      .all();

    expect(projectCards).not.toBeNull();
    expect(projectCards).toHaveLength(PROJECTS.length);
  });

  test('should display all project details', async ({ page }) => {
    await page.goto('/#projects');

    const projectCards = await page
      .locator('#projects article.project-card')
      .all();

    for (let i = 0; i < projectCards.length; i++) {
      const project = PROJECTS[i];

      const title = await projectCards[i].locator('h3').textContent();
      const description = await projectCards[i]
        .locator('p')
        .textContent();
      const image = projectCards[i].locator('img');
      await expect(image).toBeVisible();

      expect(title).toBe(project.title);
      expect(description).toBe(project.description);
    }
  });
});
