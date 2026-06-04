import {Page, Locator} from '@playwright/test';


export class Secure {
    readonly page: Page;
    readonly successMessage: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successMessage = page.locator('#flash');
        this.logoutButton = page.getByRole('link', {name: 'Logout'});
    }

    async logout () {
        await this.logoutButton.click();
    }
}