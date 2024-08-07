import { BasePage } from './basePage';
export class MainPage {
    constructor(page) {
        this.page = page;
        this.basePage = new BasePage(page);
    }
    async goto(url) {
        await this.page.goto(url);
    }
    async navigatePanel(text){
        await this.page.getByRole('link', { name: text }).first().click();
    }
    
}