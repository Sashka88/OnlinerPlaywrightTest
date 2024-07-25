import { BasePage } from './basePage';
export class TvPage {
    constructor(page) {
        this.page = page
        this.basePage = new BasePage(page);
    }

    async selectMaker(text) {
        const makerPromise = this.page.waitForResponse('**/search/**');
        await this.basePage.getLocatorByText(text, true).click();
        await makerPromise;
    }

    async writePrice(placeholder, price) {
        const pricePromise = this.page.waitForResponse('**/search/**');
        await this.page.getByPlaceholder(placeholder).fill(price);
        await pricePromise;
    }


    async selectDiagonal(min, max) {
        const diagPromise = this.page.waitForResponse('**/search/**');
        await this.basePage.getLocatorByText(min, true).first().click();
        await diagPromise;
        await this.basePage.getLocatorByText(max, true).first().click();
        await diagPromise;
    }

    async selectResolution(text) {
        const resPromise = this.page.waitForResponse('**/search/**');
        await this.basePage.getLocatorByText(text, true).click();
        await resPromise;
    }

}
