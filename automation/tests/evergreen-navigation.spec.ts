import { test, expect } from '@playwright/test';

test('Services navigation opens the Services page', async ({ page }) => {
  await page.goto('https://www.evergreeninsulation.net/', {
    waitUntil: 'domcontentloaded'
  });

  const servicesLink = page
    .getByRole('banner')
    .getByRole('link', { name: 'Services', exact: true });

  await expect(servicesLink).toBeVisible();

  await servicesLink.click();

  await expect(page).toHaveURL(/\/services/);
});

test('About Us navigation opens the About Us page', async ({ page }) => {
  await page.goto('https://www.evergreeninsulation.net/', {
    waitUntil: 'domcontentloaded'
  });

  const aboutUsLink = page
    .getByRole('banner')
    .getByRole('link', { name: 'About Us', exact: true });

  await expect(aboutUsLink).toBeVisible();

  await aboutUsLink.click();

  await expect(page).toHaveURL(/\/about-us/);
});

test('Book Online loads the Housecall Pro booking integration', async ({ page }) => {
  await page.goto('https://www.evergreeninsulation.net/', {
    waitUntil: 'domcontentloaded'
  });

  const bookOnline = page
    .locator('[id="1322916218"] a')
    .filter({ hasText: 'Book Online' });

  await expect(bookOnline).toBeVisible();

  await bookOnline.click();

  const bookingFrame = page.locator(
    'iframe[src*="book.housecallpro.com/book/"]'
  );

  await expect(bookingFrame).toBeAttached({ timeout: 15000 });
});