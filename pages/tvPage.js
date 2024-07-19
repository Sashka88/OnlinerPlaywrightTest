import { BasePage } from './basePage';
export class TvPage {
    constructor(page) {
        this.page = page
        this.basePage = new BasePage(page);
    //    this.fieldPrice = page.getByPlaceholder('до');
    }

    async selectMaker(text) {
        await this.basePage.getLocatorByText(text, true).click();
    }

    async writePrice(placeholder, price) {
        await this.page.getByPlaceholder(placeholder).fill(price);
    }


    async selectDiagonal(min, max) {
        await this.basePage.getLocatorByText(min, true).first().click();
        await this.basePage.getLocatorByText(max, true).first().click();
    }

    async selectResolution(text) {
        await this.basePage.getLocatorByText(text, true).click();
    }

     vailidateMaker() {
        
    }

    vailidatePrice() {

    }

    vailidateDiagonal() {

    }
    
}
