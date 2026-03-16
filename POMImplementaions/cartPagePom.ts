import { Page } from '@playwright/test';

export class CartPagePom {

    constructor(private page: Page) {}

    async proceedToCheckoutFromProduct(): Promise<void> {

        await this.page.getByRole('button', { name: 'Add to basket' }).click();

        await this.page.getByRole('link', { name: 'View Basket' }).click();

        await this.page.getByRole('link', { name: 'Proceed to Checkout' }).click();

    }

}
