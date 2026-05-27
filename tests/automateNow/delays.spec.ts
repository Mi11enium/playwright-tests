import {test, expect} from '@playwright/test';


test('delay', async ({ page }) => {

    await page.goto('https://practice-automation.com/popups/');

    await page.getByText('Alert Popup').click()
    

});