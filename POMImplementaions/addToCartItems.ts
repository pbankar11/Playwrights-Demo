// import { BaseClass } from "./baseClass";

import { BaseClass } from '../POMImplementaions/baseClass';

class AddToCartItems extends BaseClass{
    addtocart:any;
    allproduct:any;
    itemName:any;
    loginButton:any;

    constructor(page:any){
        super(page);
        this.addtocart = page.locator('href', '/?add-to-cart');
        // this.itemName = page.locator('Selenium Ruby');
        this .allproduct = page.locator('.products');
        // this.loginButton = page.locator('button', {name:'Log in'});
    }

    async clickAddToCartButton(itemName: string) {
        const product = this.page
            .locator(this.allproduct, { hasText: itemName })
            .locator('a', { hasText: 'Add to cart' });

        // Scroll element into view
        // await product.scrollIntoViewIfNeeded();

        // Click element
        await product.click();
    }

    async fill(locator: string, value: string) {
        const element = this.page.locator(locator);
        await element.scrollIntoViewIfNeeded();
        await element.fill(value);
    }
}

export { AddToCartItems };