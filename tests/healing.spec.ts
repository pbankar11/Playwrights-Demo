import { test } from '@playwright/test';
import { smartClick } from '../wrappers/smartActions.js';


test('Login test', async ({ page }) => {

  await page.goto('https://example.com');

  await smartClick(page, '#login-btn', 'Login');

});