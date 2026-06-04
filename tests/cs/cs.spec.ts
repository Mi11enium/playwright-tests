import {test, expect} from '@playwright/test'



test('cs', async ({ page }) => {


    await page.goto('https://coinmarketcap.com/');
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Prices');

    await page.click('text=Toncoin');

});