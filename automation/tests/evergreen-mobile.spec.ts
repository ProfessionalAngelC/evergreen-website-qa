import { test, expect } from '@playwright/test';

test('Mobile navigation menu opens and closes correctly', async ({ page }) => {
  await page.setViewportSize({
    width: 390,
    height: 844
  });

  await page.goto('https://www.evergreeninsulation.net/', {
    waitUntil: 'load'
  });

  const openMenuButton = page.getByRole('button', {
    name: 'Open menu'
  });

  await expect(openMenuButton).toBeVisible();

  await openMenuButton.click();

  const closeMenuButton = page.getByRole('button', {
    name: 'Close menu'
  });

  await expect(closeMenuButton).toBeVisible({
    timeout: 10000
  });

  await closeMenuButton.click();

  await expect(openMenuButton).toBeVisible({
    timeout: 10000
  });
});