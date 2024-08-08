
import { BasePage } from './basePage';
import { expect } from '@playwright/test'
export class MainPage {
    constructor(page) {
        this.page = page;
        this.basePage = new BasePage(page);
    }
    async goto(url) {
        await this.page.goto(url);
    }
    async navigatePanel(text) {
        await this.page.getByRole('navigation').getByRole('link', { name: text }).click();
    }
    async verifyPage(text) {
        const linkElement = await this.page.getByRole('link', { name: text, exact: true });
        await expect(linkElement).toBeVisible();
    }

}