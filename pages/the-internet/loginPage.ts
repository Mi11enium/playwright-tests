import {Page, Locator} from '@playwright/test';


export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly errorMessage: Locator;
    readonly logoutMessage: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByRole('textbox', {name: 'Username'});
        this.password = page.getByRole('textbox', {name: 'Password'});
        this.errorMessage = page.locator('#flash');
        this.logoutMessage = page.locator('#flash');
        this.loginButton = page.getByRole('button', {name: ' Login'});
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login() {
        await this.loginButton.click();
    }

    async loginData(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
    }
}