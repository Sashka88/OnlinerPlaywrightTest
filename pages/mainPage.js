export class MainPage{
    constructor(page){
        this.page = page;
        //this.icon = page.getByRole('link', { name: 'Onlíner', exact: true });

    }
    async goto(url){
        await this.page.goto(url);
    }

    //async validatePage(){
    //    await expect(this.icon).toBeVisible();
    //}

}