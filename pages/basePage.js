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

    async selectCheckbox(param) {
        await this.getLocatorByText(param.value).first().click();
    }

    async fillInput(param) {
        await this.page.getByPlaceholder(param.placeholder).first().fill(param.value);
    }

    async waitForLoadState(state = 'load') {
        await this.page.waitForLoadState(state);
    }
}