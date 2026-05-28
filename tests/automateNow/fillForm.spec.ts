import {test, expect} from '@playwright/test';
import { AutoPage } from '../../pages/autoPage';



test('test', async ({ page }) => {
    
    const autoPage = new AutoPage(page);
    
    await autoPage.goto();
    
    await autoPage.fillForm({
        name: 'Andrew',
        password: 'MyPass',
        email: 'test@test.com',
        message: 'Hello'
    });

    await autoPage.checkboxByName('Coffee').check();
    await autoPage.radioButtonByName('Blue').check();
    await autoPage.automationDropdown.selectOption('Yes');
    
    await autoPage.submit();


});