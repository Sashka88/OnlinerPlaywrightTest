import { test, expect } from '../custom.fixture'
import { MainPage } from '../pages/mainPage'
import { CatalogPage } from '../pages/catalogPage'
import { TvPage } from '../pages/tvPage'

test('test', async ({ page, tv }) => {
  test.setTimeout(60000);
  const Main = new MainPage(page);
  await Main.goto('https://www.onliner.by/');
  await expect(page.getByRole('link', { name: 'Onlíner', exact: true })).toBeVisible();
  await Main.goto('https://catalog.onliner.by/');
  const Catalog = new CatalogPage(page);
  await Catalog.accept(tv.acceptButtonText);
  await expect(page.locator('h1')).toContainText('Каталог');
  await Catalog.navigateMenu(tv.menu);
  await Catalog.navigateSubMenu(tv.submenu);
  await Catalog.navigatePage(tv.page);
  await expect(page.getByRole('heading')).toContainText(tv.page);
  const Tv = new TvPage(page);
  await Tv.selectMaker(tv.maker);
  await Tv.writePrice(tv.placeholderText, tv.price);
  await Tv.selectDiagonal(tv.minDiagonal, tv.maxDiagonal);
  await Tv.selectResolution(tv.resolution);
  await expect(page.locator('.catalog-form__offers-item').first()).toBeVisible();
  await expect(page.locator('.catalog-interaction__state').first()).toBeVisible();
  const list = await page.locator('.catalog-form__offers-item');
  let searchResults = await list.count();
  if (searchResults > 0) {
    await list.first().waitFor({ state: 'visible' });
    console.log(`Found ${searchResults} items.`);
  } else {
    console.log('No items found.');
  }
  expect(searchResults).toBeGreaterThan(0);
  for (let i = 0; i < searchResults; i++) {
    const listElement = list.nth(i);
    await expect(listElement.locator('.catalog-form__description_base-additional')).toContainText(tv.maker);
    await expect(listElement.locator('.catalog-form__parameter-part_1')).toContainText(tv.resolution);
    const detailsText = await page.locator('.catalog-form__parameter-part.catalog-form__parameter-part_1 .catalog-form__description').first().innerText();
    const match = detailsText.match(/\d{2}/);
    const diagNumber = match ? parseInt(match[0], 10) : null
    expect(diagNumber).toBeGreaterThanOrEqual(parseInt(tv.minDiagonal));
    expect(diagNumber).toBeLessThan(parseInt(tv.maxDiagonal));
    const priceElement = await page.locator('.catalog-form__link catalog-form__link_nodecor catalog-form__link_primary-additional catalog-form__link_huge-additional catalog-form__link_font-weight_bold').nth(i);
    const priceText = await priceElement.innerText();
    const price = toFloat(priceText);
    expect(price).toBeLessThanOrEqual(parseFloat(tv.price));
    console.log(diagNumber);
  }
  function toFloat(text) {
    const [textNumber] = text
      .split(' ')
      .map(v => v.replace(',', '.'))
      .filter(Number);

    return Number(textNumber);
  }
});
