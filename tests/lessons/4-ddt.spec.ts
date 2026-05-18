import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/loginPage';
import loginData from '../../test-data/loginData.json'

test('valid login test', async ({page}) => {
   
    // Создание объекта loginPage из POM loginPage (pages/loginPage.ts)
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    // await loginPage.login('standard_user','secret_sauce');
    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    // await loginPage.verifyLoginSuccess();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('invalid login test', async ({page}) => {
   
    // Создание объекта loginPage из POM loginPage (pages/loginPage.ts)
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    // await loginPage.login('standard_user','secret_sauce');
    await loginPage.login(
        loginData.invalidUser.username,
        loginData.invalidUser.password
    );
    // await loginPage.verifyLoginSuccess();

    await expect(loginPage.errorMessage).toBeVisible();
});