import { test, expect } from '@playwright/test';
import {MainPage} from '../pages/mainPage'
import {CatalogPage} from '../pages/catalogPage'
import {TvPage} from '../pages/tvPage'

test('test', async ({ page }) => {
  const Main = new MainPage(page);
  await Main.goto('https://www.onliner.by/');
  //await Main.validatePage();
  await Main.goto('https://catalog.onliner.by/');
  //await expect(page.getByRole('link', { name: 'Onlíner', exact: true })).toBeVisible();
 // await expect(page.locator('h1')).toContainText('Каталог');
  const Catalog = new CatalogPage(page);
  await Catalog.accept();
  await Catalog.navigateMenu();
  await Catalog.navigateSubMenu();
  await Catalog.navigatePage();
 // await expect(page.getByRole('heading')).toContainText('Телевизоры');
 const Tv = new TvPage(page);
 await Tv.selectMaker();
 await Tv.writePrice('1500');
 await Tv.selectDiagonal();
 await Tv.selectResolution();
 // await expect(page.locator('#container')).toContainText('Samsung');
// await expect(page.locator('#container')).toContainText('1920x1080');
});