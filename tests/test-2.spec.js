import { test, expect } from '../custom.fixture'
import {MainPage} from '../pages/mainPage'
import {CatalogPage} from '../pages/catalogPage'

const arr = [1];

for (const arrayElement of arr) {
  test(`test ${arrayElement}`, async ({ page, homePage, titles }) => {
    const Main = new MainPage(page);
    await expect(page.getByRole('link', { name: 'Onlíner', exact: true })).toBeVisible();
    await Main.navigatePanel(titles.sectionName);
    await expect(page.locator('h1')).toContainText('Каталог');
    const Catalog = new CatalogPage(page);
    await expect(page.getByRole('heading', { name: 'Каталог' })).toBeVisible();
    await Catalog.navigateMenu(titles.menuName);
    await Catalog.navigateSubMenu(titles.submenuName);
    await Catalog.navigatePage(titles.pageTitle);
  await expect(page.getByRole('heading', { name: 'Телевизоры' })).toBeVisible();
})
}