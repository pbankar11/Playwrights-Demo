
import {test,expect} from '@playwright/test'
test('add to card test ', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.amazon.com/");

    await page.fill('#twotabsearchtextbox', 'clothes');
    await page.pause();
    const firstItem = page.locator('div[role="button"]', { hasText: 'clothes hanger' });
    await page.waitForSelector('div[role="button"]', {
    state: 'visible',
    timeout: 5000
    });
    await firstItem.first().waitFor();
    await firstItem.first().click();
    await page.pause();
})

test.only('search the flights pune to delhi on yatra.com',async({page})=>{

await page.goto("https://www.yatra.com/");

await page.locator('[aria-label="Departure From New Delhi inputbox"]').click();//id="input-with-icon-adornment"
await page.fill('#input-with-icon-adornment', 'Pune');

const fromCity = page.locator('li', { hasText: 'Pune' });

await fromCity.first().waitFor({ state: 'visible' });

await fromCity.first().click();
await page.locator('[aria-label="Going To Mumbai inputbox"]').click();
await page.fill('#input-with-icon-adornment', 'Delhi');

const toCity = page.locator('li', { hasText: 'Delhi' });

await toCity.first().waitFor({ state: 'visible' });

await toCity.first().click();
await page.pause();
await page.locator('[class="css-13lub7m"]').click();//216217

})

