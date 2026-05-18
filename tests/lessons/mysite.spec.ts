import {test} from '@playwright/test'
import { AuthPage } from '../../pages/authPage'

test('mylogintest', async ({ page }) => {

    const authPage = new AuthPage(page);

    await authPage.goSite();
    await authPage.login('greeswold@mail.ru','Q1q2q3');



});