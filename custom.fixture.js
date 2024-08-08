import { test as baseTest, expect as baseExpect } from '@playwright/test';
import testData from './testData/test-data';
import titlesData from './static/titles';

export const test = baseTest.extend({
    titles: [titlesData, { option: true }],
    tv: [testData, { option: true }],

    async homePage({ page }, use) {
        await page.route('**/fundingchoicesmessages.google.com/**', route => route.abort());
        await page.goto('https://www.onliner.by/');
        await use(page);

    },
    async tvCatalogPage({ page }, use) {
        await page.route('**/fundingchoicesmessages.google.com/**', route => route.abort());
        await page.goto('https://catalog.onliner.by/tv');

        if (await page.getByText('Доставка в ').isVisible()) {
            await page.getByText('Да', { exact: true }).first().click();
        }

        if (await page.getByText('Не откладывайте покупки! Выбирайте оплату Minipay!').isVisible()) {
            await page.getByText('Супер, спасибо').click();
        }

        await use(page);
    }
});

export const expect = baseExpect;