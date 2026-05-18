import {test} from '@playwright/test'
import { SaucePage } from '../pages/saucePage'


test('sauceLogin', async ({ page }) => {

    const saucePage = new SaucePage(page);

    await saucePage.site();
    await saucePage.login('standard_user', 'secret_sauce');
    await saucePage.checkSite();

});