export class TvPage{
constructor(page){
    this.page = page
    this.cbxMaker =  page.getByText('Samsung', { exact: true });
    this.fieldPrice = page.getByPlaceholder('до');
    this.cbxMinDiagonal = page.getByText('40"').first();
    this.cbxMaxDiagonal = page.getByText('50"').first();
    this.cbxResolution = page.getByText('1920x1080 (Full HD)', { exact: true });
}


async selectMaker(){
    await this.cbxMaker.click();

}

async writePrice(price){
    await this.fieldPrice.fill(price)
}


async selectDiagonal(){
    await this.cbxMinDiagonal.click();
    await this.cbxMaxDiagonal.click();
}

async selectResolution(){
    await this.cbxResolution.click()
} 

vailidateMaker(){

}
vailidatePrice() {

}

vailidateDiagonal() {

}
vailidateResolution() {
}
}
