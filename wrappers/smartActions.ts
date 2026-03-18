import { healLocator } from '../healing/selfHealingEngine.js';

export async function smartClick(page, locator, text) {
  try {
    await page.locator(locator).click();
  } catch (error) {

    console.log('⚠️ Locator failed, trying healing...');

    const newLocator = await healLocator(page, locator, text);

    await page.locator(newLocator).click();
  }
}