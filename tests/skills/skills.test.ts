import { test, expect, Page } from '@playwright/test';
import { SKILLS } from '@/lib/constants/skills-constants';

test.describe('Skills Section', () => {
  const SAMPLE_SIZE = 3;

  async function getSkillsContainer(page: Page) {
    await page.waitForSelector('#skills');
    return page.locator('#skills .flex.justify-evenly').first();
  }

  test.beforeEach(async ({ page }) => {
    await page.goto('/#skills');
    await page.waitForLoadState('networkidle');
  });

  test('should display correct number of skills', async ({
    page
  }) => {
    const container = await getSkillsContainer(page);
    const skillLinks = await container.locator('a').all();
    expect(skillLinks).toHaveLength(SKILLS.length);
  });

  test('should display skills with correct images', async ({
    page
  }) => {
    const container = await getSkillsContainer(page);

    for (const skill of SKILLS.slice(0, SAMPLE_SIZE)) {
      const skillImage = container.locator(
        `img[alt="${skill.label} logo"]`
      );
      await expect(skillImage).toBeVisible();
      await expect(skillImage).toHaveAttribute('src', skill.image);
    }
  });

  test('should show tooltips on hover', async ({ page }) => {
    const container = await getSkillsContainer(page);

    for (const skill of SKILLS.slice(0, SAMPLE_SIZE)) {
      const skillLink = container
        .locator(`a:has(img[alt="${skill.label} logo"])`)
        .first();
      const tooltip = container
        .locator(`span:text("${skill.label}")`)
        .first();

      await expect(skillLink).toBeVisible();
      const box = await skillLink.boundingBox();
      if (!box) continue;

      await page.mouse.move(
        box.x + box.width / 2,
        box.y + box.height / 2
      );
      await expect(tooltip).toBeVisible({ timeout: 2000 });
      await expect(tooltip).toHaveClass(/opacity-0/, {
        timeout: 500
      });
    }
  });

  test('should have correct link attributes and load images properly', async ({
    page
  }) => {
    const container = await getSkillsContainer(page);

    for (const skill of SKILLS.slice(0, SAMPLE_SIZE)) {
      // Check link attributes
      const skillLink = container
        .locator(`a[href="${skill.url}"]`)
        .first();
      await expect(skillLink).toHaveAttribute('target', '_blank');
      await expect(skillLink).toHaveAttribute(
        'rel',
        'noopener noreferrer'
      );
      await expect(skillLink).toHaveAttribute('href', skill.url);
      await expect(skillLink).toBeEnabled();

      // Check image properties
      const img = container
        .locator(`img[alt="${skill.label} logo"]`)
        .first();
      await expect(img).toHaveAttribute('width', '40');
      await expect(img).toHaveAttribute('height', '40');
      await expect(img).toBeVisible();
      const imgSrc = await img.getAttribute('src');
      expect(imgSrc).toBeTruthy();
    }
  });
});
