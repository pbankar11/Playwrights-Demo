const { BaseClass } = require('../POMImplementaions/baseClass');

import test, { expect } from '@playwright/test';
import { AddToCartItems } from '../POMImplementaions/addToCartItems';
import { CheckoutPagePom } from '../POMImplementaions/checkoutPagePom';
import { CartPagePom } from '../POMImplementaions/cartPagePom';
import { ProductPagePom } from '../POMImplementaions/productPagePom';

let page: any;
let baseClass: any;
let addToCart: any;
let checkoutPagePom: any;
const checkout = new CheckoutPagePom(page);
const cart = new CartPagePom(page);
// const product = new ProductPagePom(page);
const productPage = new ProductPagePom(page);
test.describe.serial('POM Implementation', () => {
    
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        addToCart = new AddToCartItems(page);
        baseClass = new BaseClass(page);
        await baseClass.goToURL('https://practice.automationtesting.in/');
    });
    test('Add item to cart', async () => {
        // await page.getByRole('link', { name: 'Selenium Ruby Selenium Ruby ₹' }).click();
        // await productPage.selectItem('Selenium Ruby');
        await page.pause();
        await page.locator('.product-item').filter({hasText:'Selenium Ruby'})
        await addToCart.proceedToCheckoutFromProduct();
        await checkout.inputDetailsForCheckout();
        
    });
});