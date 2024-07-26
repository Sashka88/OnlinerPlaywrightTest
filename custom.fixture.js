import { test as baseTest, expect as baseExpect } from '@playwright/test';
import testData from './test-data';

export const test = baseTest.extend({
    tv: [testData, { option: true }],

    async tvCatalogPage({ page }, use) {
        await page.route('**/fundingchoicesmessages.google.com/**', route => route.abort());
        await page.goto('https://catalog.onliner.by/tv');

        await use(page);
    }
});

export const expect = baseExpect;