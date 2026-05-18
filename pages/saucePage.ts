import {Page, Locator} from '@playwright/test'

export class SaucePage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page:Page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Username'});
        this.password = page.getByRole('textbox', { name: 'Password'});
        this.loginButton = page.getByRole('button', { name: 'Login'});
    }

    async site() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }

    async checkSite() {
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
    }
}