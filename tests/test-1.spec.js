import { test, expect } from '../custom.fixture'
import { TvPage } from '../pages/tvPage'

const arr = [1, 2, 3];

for (const arrayElement of arr) {
  test(`test ${arrayElement}`, async ({ tvCatalogPage, tv }) => {
    const tvPage = new TvPage(tvCatalogPage);
    await tvPage.verifyPage('Телевизоры', ' selected page should open');

    await tvPage.setFilters([
      tv.maker,
      tv.minDiagonal,
      tv.maxDiagonal,
      tv.resolution,
      tv.priceTo
    ]);

    const itemsNumber = await tvPage.getSearchResults();
    expect(await itemsNumber, 'should have at least one item').toBeGreaterThan(0);

    for (let i = 0; i < itemsNumber; i++) {
      expect.soft(await tvPage.getTvMaker(i), `maker should be ${tv.maker}`).toContainText(tv.maker.value);
      expect.soft(await tvPage.getResolution(i), `resolution should be ${tv.resolution}`).toContainText(tv.resolution.value);
      expect.soft(await tvPage.getDiagonal(), `diagonal should be equal or greater than ${tv.minDiagonal}`).toBeGreaterThanOrEqual(parseInt(tv.minDiagonal.value));
      expect.soft(await tvPage.getDiagonal(), `diagonal should be less than ${tv.minDiagonal}`).toBeLessThan(parseInt(tv.maxDiagonal.value));
      expect.soft(await tvPage.getPrice(i), `price should be equal or less than ${tv.priceTo}`).toBeLessThanOrEqual(parseFloat(tv.priceTo.value));
    }
  });
}
