import {test, expect} from '@playwright/test'

test('login test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

    const username = page.getByRole('textbox', { name: 'Username'});
    const password = page.getByRole('textbox', { name: 'Password'});
    const loginButton = page.getByRole('button', { name: "Login"});

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();


    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});