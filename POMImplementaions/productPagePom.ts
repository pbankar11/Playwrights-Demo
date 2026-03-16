import { Page, Locator } from '@playwright/test';

export class ProductPagePom {
    

    // private productsContainer: Locator;

    constructor(private page: Page) {
        // this.productsContainer = this.page.locator('.products');
    }

    async selectItem(itemName: string): Promise<void> {

        await this.page.locator('.product-item').filter({hasText:itemName})


        // await product.scrollIntoViewIfNeeded();

        // await product.click();

    }

}
