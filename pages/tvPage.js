import test from '@playwright/test';
import { BasePage } from './basePage';
export class TvPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.tvItems = this.page.locator('.catalog-form__offers-flex');
        this.tvMaker = this.page.locator('.catalog-form__description_base-additional');
        this.detailsSections = this.page.locator('.catalog-form__parameter-part.catalog-form__parameter-part_1 .catalog-form__description').first();
        this.price = this.page.locator('.catalog-form__link.catalog-form__link_nodecor.catalog-form__link_primary-additional.catalog-form__link_huge-additional.catalog-form__link_font-weight_bold');
        this.resolutions = this.page.locator('.catalog-form__parameter-part_1')
    }

    async goto() {
        await this.page.goto('.../tv');
    }

    async selectMaker(maker) {
        await test.step(`select tv maker "${maker}"`, async () => {
            const makerPromise = this.page.waitForResponse('**/search/**');
            await this.getLocatorByText(maker, true).click();
            await makerPromise;
        })
    }

    async writePrice(placeholder, price) {
        await test.step(`select price "${price}"`, async () => {
            const pricePromise = this.page.waitForResponse('**/search/**');
            await this.page.getByPlaceholder(placeholder).fill(price);
            await pricePromise;
        })
    }


    async selectDiagonal(min, max) {
        await test.step(`select min diagonal "${min}" and max  "${max}"`, async () => {
            const diagPromise = this.page.waitForResponse('**/search/**');
            await this.getLocatorByText(min, true).first().click();
            await diagPromise;
            await this.getLocatorByText(max, true).first().click();
            await diagPromise;
        })
    }

    async selectResolution(resolution) {
        await test.step(`select resolution "${resolution}"`, async () => {
            const resPromise = this.page.waitForResponse('**/search/**');
            await this.getLocatorByText(resolution, true).first().click();
            await resPromise;
        })
    }

}
