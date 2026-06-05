import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/the-internet/loginPage';
import { SecureAreaPage } from '../../pages/the-internet/secureArea';





test.describe('Login Group', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
    });
    
    test('successLogin', async ({ page }) => {
        const secureAreaPage = new SecureAreaPage(page);
        const loginPage = new LoginPage(page);

        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        await loginPage.clickLoginButton();
        await expect(secureAreaPage.successMessage).toContainText('You logged into a secure area!');
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');

        await secureAreaPage.logout();
        await expect(loginPage.logoutMessage).toContainText('You logged out of the secure area!');
        

        
    });

    test('errorLogin', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.login('tomsa', 'Sups!');
        await loginPage.clickLoginButton();
        await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
        
    });

    test('errorPassword', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.login('tomsmith', 'Sups!');
        await loginPage.clickLoginButton();
        await expect(loginPage.flashMessage).toContainText('Your password is invalid!');

    });
})
