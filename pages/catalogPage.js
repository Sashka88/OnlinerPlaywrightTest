import { BasePage } from './basePage';
import { expect } from '@playwright/test'

export class CatalogPage extends BasePage{
    constructor(page) {
        super (page);
        this.page = page;
    }

    async navigateMenu(text) {
        await this.getLocatorByText(text, true).first().click();

    }

    async navigateSubMenu(text) {
        await this.getLocatorByText(text, true).first().click();
    }

    async navigatePage(text) {
        await this.page.getByRole('link', { name: text }).first().click();
    }

    async verifyPage(text) {
        const linkElement = this.page.locator('h1');
    await expect(linkElement).toContainText(text); 
    await expect(linkElement).toBeVisible();
    }



}