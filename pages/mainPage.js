export class MainPage {
    constructor(page) {
        this.page = page;

    }
    async goto(url) {
        await this.page.goto(url);
    }
}