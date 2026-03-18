import {test,expect} from '@playwright/test'

import { BaseClass } from '../POMImplementaions/baseClass.js';


test.describe('Make practice discribe',()=>{


    test('agan make practice',async({browser})=>{

        const context = await browser.newContext();
        const page = await context.newPage();
        const baseClass = new BaseClass(page);
        await baseClass.goToURL('https://practice.automationtesting.in/');
        await expect(page.getByTitle('anything')).toBeVisible();
    })

})