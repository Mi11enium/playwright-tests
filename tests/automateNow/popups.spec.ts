import {test, expect} from '@playwright/test';


test('checkPopups', async ({ page }) => {

    await page.goto('https://practice-automation.com/popups/');

    const alert = page.getByRole('button', {name: 'Alert Popup'});
    alert.click();


});