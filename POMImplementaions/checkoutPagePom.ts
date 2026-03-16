import { Page } from '@playwright/test';

export class CheckoutPagePom {

    constructor(private page: Page) {}

    async inputDetailsForCheckout(): Promise<void> {

        await this.page.getByRole('textbox', { name: 'First Name *' }).fill('pravin');

        await this.page.locator('#billing_middle_name').fill('kiran');

        await this.page.getByRole('textbox', { name: 'Last Name *' }).fill('bankar');

        await this.page.locator('#billing_company').fill('tricentis');

        await this.page.getByRole('textbox', { name: 'Email Address *' }).fill('tricenstsis2');

        await this.page.getByRole('textbox', { name: 'Phone *' }).fill('9604521812');

        // Country
        await this.page.getByRole('combobox', { name: 'Country *' }).fill('indi');
        await this.page.getByRole('option', { name: 'India', exact: true }).click();

        // Address
        await this.page.getByRole('textbox', { name: 'Address *', exact: true }).fill('abc');

        await this.page.getByRole('textbox', { name: 'Town / City *' }).fill('Pune');

        // State
        await this.page.getByRole('combobox', { name: 'State / County *' }).fill('maha');
        await this.page.getByRole('option', { name: 'Maharashtra' }).click();

        await this.page.getByRole('textbox', { name: 'Postcode / ZIP *' }).fill('411017');

        // Payment
        await this.page.getByRole('radio', { name: 'Cash on Delivery' }).click();

        await this.page.getByRole('button', { name: 'Place order' }).click();

        // Final email confirmation
        await this.page.getByRole('textbox', { name: 'Email Address *' }).fill('tricenstsis2@yopmail.com');

        await this.page.getByRole('button', { name: 'Place order' }).click();
    }

}
