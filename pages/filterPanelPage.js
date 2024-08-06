import test from "@playwright/test";
import {BasePage} from "./basePage.js";
import {filterType} from "../static/filterTypes.js";

export class FilterPanelPage extends BasePage{
    constructor(page) {
        super(page);
        this.loadingBar = this.page.getByText('Нет товаров Сбросить фильтр');
    }

    /**
     *
     * @param {Array} filters
     * @return {Promise<void>}
     */
    async setFilters(filters) {
        await test.step('select filters on left panel', async () => {
            for (const filter of filters) {

                if (filter.type === filterType.checkbox) {
                    await this.selectCheckbox(filter);
                }

                if (filter.type === filterType.input) {
                    await this.fillInput(filter);
                }

                // ..

            }

            // wait loading bar is hidden
            await this.loadingBar.waitFor({
                state: 'hidden'
            })
        })
    }
}