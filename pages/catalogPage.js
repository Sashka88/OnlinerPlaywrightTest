export class CatalogPage {
    constructor(page) {
        this.page = page
        this.btnAccept = page.getByLabel('Соглашаюсь', { exact: true });
        this.btnMenu = page.getByRole('img', { name: 'Электроника' });
        this.btnSubMenu = page.getByText('Телевидение и видео');
        this.btnPage = page.getByRole('link', { name: 'Телевизоры' });
    }
    async accept() {
        await this.btnAccept.click();
    }


    async navigateMenu() {
        await this.btnMenu.click();

    }

    async navigateSubMenu() {
        await this.btnSubMenu.click();

    }

    async navigatePage() {
        await this.btnPage.click();
    }

}