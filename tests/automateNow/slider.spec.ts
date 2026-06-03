import {test, expect} from '@playwright/test';

test('Slider test', async ({page}) => {
    await page.goto('https://practice-automation.com/slider/');

    const quad = await page.locator('#slideMe');

    const value = await quad.getAttribute('value');
    console.log(value);

});
