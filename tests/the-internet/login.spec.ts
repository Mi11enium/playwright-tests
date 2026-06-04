import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/the-internet/loginPage';
import { Secure } from '../../pages/the-internet/secureArea';




test.describe('Login Group', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login');
        expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
    });
    
    test('successLogin', async ({ page }) => {
        const secureArea = new Secure(page);
        const loginPage = new LoginPage(page);

        await loginPage.loginData('tomsmith', 'SuperSecretPassword!');
        await loginPage.login();
        await expect(secureArea.successMessage).toContainText('You logged into a secure area!');
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');

        await secureArea.logout();
        await expect(loginPage.logoutMessage).toContainText('You logged out of the secure area!');
        

        
    });

    test('errorLogin', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.loginData('tomsa', 'Sups!');
        await loginPage.login();
        await expect(loginPage.errorMessage).toContainText('Your username is invalid!');
        
    });

    test('errorPassword', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.loginData('tomsmith', 'Sups!');
        await loginPage.login();
        await expect(loginPage.errorMessage).toContainText('Your password is invalid!');

    });
})
