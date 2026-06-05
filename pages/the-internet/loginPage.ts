import {Page, Locator} from '@playwright/test';

export interface User {
    username: string;
    password: string;
}

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly flashMessage: Locator;
    readonly logoutMessage: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByRole('textbox', {name: 'Username'});
        this.password = page.getByRole('textbox', {name: 'Password'});
        this.flashMessage = page.locator('#flash');
        this.logoutMessage = page.locator('#flash');
        this.loginButton = page.getByRole('button', {name: ' Login'});
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
    }
}