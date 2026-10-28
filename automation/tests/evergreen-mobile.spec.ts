import { test, expect } from '@playwright/test';

test('Mobile navigation menu opens and closes correctly', async ({ page }) => {
  await page.setViewportSize({
    width: 390,
    height: 844
  });

  await page.goto('https://www.evergreeninsulation.net/', {
    waitUntil: 'load'
  });

  const openMenuButton = page
    .locator('button[aria-label="Open menu"]:visible')
    .first();

  await expect(openMenuButton).toBeVisible({
    timeout: 10000
  });

  await expect(openMenuButton).toHaveAttribute(
    'aria-expanded',
    'false'
  );

  await openMenuButton.click();

  const closeMenuButton = page
    .locator('button[aria-label="Close menu"]:visible')
    .first();

  await expect(closeMenuButton).toBeVisible({
    timeout: 10000
  });

  await expect(closeMenuButton).toHaveAttribute(
    'aria-expanded',
    'true'
  );

  await closeMenuButton.click();

  const reopenedMenuButton = page
    .locator('button[aria-label="Open menu"]:visible')
    .first();

  await expect(reopenedMenuButton).toBeVisible({
    timeout: 10000
  });

  await expect(reopenedMenuButton).toHaveAttribute(
    'aria-expanded',
    'false'
  );
});