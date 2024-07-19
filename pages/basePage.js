export class BasePage {
    constructor(page) {
        this.page = page
    }
    getLocatorByText(text, exact = false) {
        if (exact) {
            return this.page.getByText(text, { exact: true });
        } else {
            return this.page.getByText(text);
        }
    }
}
