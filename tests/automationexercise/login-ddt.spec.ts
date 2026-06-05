import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/automationexercise/loginPage';

const users = [
  {
    email: 'wrong@test.com',
    password: '123'
  },
  {
    email: 'wrong2@test.com',
    password: '456'
  }
];


test.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
});
    
for (const user of users) {
    test(`Login for email ${user.email}`, async ({ page }) => {
                const loginPage = new LoginPage(page);
                
                await loginPage.login(user.email,user.password);
                await expect(loginPage.errorMessage).toHaveText('Your email or password is incorrect!');

    });
}



