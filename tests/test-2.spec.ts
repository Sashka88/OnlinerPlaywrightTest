import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.onliner.by/');
  await page.goto('https://catalog.onliner.by/');
  await page.getByLabel('Соглашаюсь', { exact: true }).click();
  await page.getByRole('img', { name: 'Электроника' }).click();
  await page.getByText('Телевидение и видео').click();
  await page.getByRole('link', { name: 'Телевизоры' }).click();
  await page.getByText('Samsung', { exact: true }).click();
  await page.getByPlaceholder('до').click();
  await page.getByPlaceholder('до').fill('1500');
  await page.getByText('40"').first().click();
  await page.getByText('50"').first().click();
  // await page.getByText('40"').first().click();
  //await page.getByText('50"').first().click();
  await page.getByText('1920x1080 (Full HD)', { exact: true }).click();
});