import {test} from '@playwright/test'
import { LoginPage } from '../../pages/loginPage';

test('login test', async ({page}) => {
   
    // Создание объекта loginPage из POM loginPage (pages/loginPage.ts)
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user','secret_sauce');
    // await loginPage.verifyLoginSuccess();
});