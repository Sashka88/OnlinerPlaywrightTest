import { test, expect } from '../custom.fixture'
import { TvPage } from '../pages/tvPage'

test('test', async ({ page, tvCatalogPage, tv }) => {
  test.setTimeout(60000);
  // skip navigation: directly in test with goto, Page Object method goto/open/go
  const tvPage = new TvPage(page);
  await tvPage.selectMaker(tv.maker);
  await tvPage.writePrice(tv.placeholderText, tv.price);
  await tvPage.selectDiagonal(tv.minDiagonal, tv.maxDiagonal);
  await tvPage.selectResolution(tv.resolution);

  const itemsNumber = await tvPage.tvItems.count();
  expect(itemsNumber, 'should have at least one item').toBeGreaterThan(0);
  console.log(itemsNumber);

  for (let i = 0; i < itemsNumber; i++) {
    await expect.soft(tvPage.tvMaker.nth(i), `should maker be ${tv.maker}`).toContainText(tv.maker);
    await expect.soft(tvPage.resolutions.nth(i), `should resolution be ${tv.resolution}`).toContainText(tv.resolution);
    const detailsText = await tvPage.detailsSections.innerText();
    console.log(detailsText);
    const match = detailsText.match(/\d{2}/);
    const diagNumber = match ? parseInt(match[0], 10) : null
    expect(diagNumber).toBeGreaterThanOrEqual(parseInt(tv.minDiagonal));
    expect(diagNumber).toBeLessThan(parseInt(tv.maxDiagonal));
    const priceText = await tvPage.price.nth(i).innerText();
    console.log(priceText);
    const price = toFloat(priceText);
    expect.soft(price).toBeLessThanOrEqual(parseFloat(tv.price));
  }

  await page.pause();
});

function toFloat(text) {
  const [textNumber] = text
    .split(' ')
    .map(v => v.replace(',', '.'))
    .filter(Number);

  return Number(textNumber);
}

function getDiagonal(detailsSectionText) {
  /*
  43" 1920x1080 (Full HD)
частота матрицы 60 Гц
Smart TV (Samsung Tizen)
AirPlay
Wi-Fi
   */

  detailsSectionText.split('\n')
}
