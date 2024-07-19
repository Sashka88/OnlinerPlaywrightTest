import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage'
import { CatalogPage } from '../pages/catalogPage'
import { TvPage } from '../pages/tvPage'

test('test', async ({ page }) => {
  const Main = new MainPage(page);
  await Main.goto('https://www.onliner.by/');
  //await expect(page.getByRole('link', { name: 'Onlíner', exact: true })).toBeVisible();
  await Main.goto('https://catalog.onliner.by/');
  const Catalog = new CatalogPage(page);
  await Catalog.accept('Соглашаюсь');
  await expect(page.locator('h1')).toContainText('Каталог');
  await Catalog.navigateMenu('Электроника');
  await Catalog.navigateSubMenu('Телевидение и видео');
  await Catalog.navigatePage('Телевизоры');
  await expect(page.getByRole('heading')).toContainText('Телевизоры');
  const Tv = new TvPage(page);
  await Tv.selectMaker('Samsung');
  await Tv.writePrice('до', '1500');
  await Tv.selectDiagonal('40"', '50"');
  await Tv.selectResolution('1920x1080 (Full HD)');
  await expect(page.locator('.catalog-form__offers-unit').first()).toBeVisible();
  const list = page.locator('.catalog-form__offers-item');
  let searchResults = await list.count();
  expect(searchResults).toBeGreaterThan(0);
  await expect(page.locator('#container')).toContainText('Samsung');
  await expect(page.locator('#container')).toContainText('1920x1080');
  console.log(searchResults);
});
