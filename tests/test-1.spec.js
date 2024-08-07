import { test, expect } from '../custom.fixture'
import { TvPage } from '../pages/tvPage'

const arr = [1];

for (const arrayElement of arr) {
  test(`test ${arrayElement}`, async ({ page, tvCatalogPage, tv }) => {
    test.setTimeout(60000);
    const tvPage = new TvPage(page);

    await tvPage.setFilters([
      tv.maker,
      tv.minDiagonal,
      tv.maxDiagonal,
      tv.resolution,
      tv.priceTo
    ]);

    const itemsNumber = await tvPage.tvItems.count();
    expect(itemsNumber, 'should have at least one item').toBeGreaterThan(0);
    console.log(itemsNumber);

    for (let i = 0; i < itemsNumber; i++) {
      await expect.soft(tvPage.tvMaker.nth(i), `should maker be ${tv.maker}`).toContainText(tv.maker.value);
      await expect.soft(tvPage.resolutions.nth(i), `should resolution be ${tv.resolution}`).toContainText(tv.resolution.value);
      const detailsText = await tvPage.detailsSections.innerText();
      // console.log(detailsText);
      const match = detailsText.match(/\d{2}/);
      const diagNumber = match ? parseInt(match[0], 10) : null
      expect.soft(diagNumber, `should diagonal be equal or greater than ${tv.minDiagonal}`).toBeGreaterThanOrEqual(parseInt(tv.minDiagonal.value));
      expect.soft(diagNumber, `should diagonal be less than ${tv.minDiagonal}`).toBeLessThan(parseInt(tv.maxDiagonal.value));
      const priceText = await tvPage.price.nth(i).innerText();
      console.log(priceText);
      const price = toFloat(priceText);
      expect.soft(price, `should price be equal or less than ${tv.priceTo}`).toBeLessThanOrEqual(parseFloat(tv.priceTo.value));
    }
  });
}

function toFloat(text) {
  const textNumber = text
    .match(/[\d,]+/)[0]
    .replace(',', '.');
  return parseFloat(textNumber);
}