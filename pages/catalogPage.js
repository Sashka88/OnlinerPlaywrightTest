import { BasePage } from './basePage';
export class CatalogPage {
    constructor(page) {
        this.page = page;
        this.basePage = new BasePage(page);
    }
    async accept(text) {
        await this.basePage.getLocatorByText(text).click();
        await this.basePage.waitForLoadState();
    }


    async navigateMenu(text) {
        await this.basePage.getLocatorByText(text).click();

    }

    async navigateSubMenu(text) {
        await this.basePage.getLocatorByText(text, true).click();
    }

    async navigatePage(text) {
        await this.page.getByRole('link', { name: text }).first().click();
    }

}