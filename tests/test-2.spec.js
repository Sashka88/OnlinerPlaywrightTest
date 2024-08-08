import { test} from '../custom.fixture'
import { MainPage } from '../pages/mainPage'
import { CatalogPage } from '../pages/catalogPage'
import { TvPage } from '../pages/tvPage'

test(`test `, async ({ homePage }) => {
  // test.setTimeout(60000);
  const mainPage = new MainPage(homePage);
  await mainPage.verifyPage('Onlíner', 'selected page should open');
  await mainPage.navigatePanel('Каталог');
  const catalogPage = new CatalogPage(homePage);
  await catalogPage.verifyPage('Каталог', 'selected page should open');
  await catalogPage.navigateMenu('Электроника');
  await catalogPage.navigateSubMenu('Телевидение и видео');
  await catalogPage.navigatePage('Телевизоры');
  const tvPage = new TvPage(homePage);
  await tvPage.verifyPage('Телевизоры', 'selected page should open');
})