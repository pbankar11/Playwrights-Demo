class BaseClass{

    protected page : any;

    constructor(page:any){

        this.page = page;
    }
    async goToURL(url:string){

        await this.page.goto(url)
    }
}

export {BaseClass }