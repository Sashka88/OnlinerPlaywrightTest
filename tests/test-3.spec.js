import { test } from '../custom.fixture'
import { MainPage } from '../pages/mainPage'
import { CatalogPage } from '../pages/catalogPage'
import { TvPage } from '../pages/tvPage'

test(`test `, async ({ homePage, titles }) => {
  const mainPage = new MainPage(homePage);
  await mainPage.verifyPage(titles.mainTitle, 'selected page should open');
  await mainPage.navigatePanel(titles.sectionName);
  const catalogPage = new CatalogPage(homePage);
  await catalogPage.verifyPage(titles.sectionName, 'selected page should open');
  await catalogPage.navigateMenu(titles.menuName);
  await catalogPage.navigateSubMenu(titles.submenuName);
  await catalogPage.navigatePage(titles.pageTitle);
  const tvPage = new TvPage(homePage);
  await tvPage.verifyPage(titles.pageTitle, 'selected page should open');
})