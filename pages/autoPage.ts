import {Page, Locator} from '@playwright/test';


export type FormData = {
    name: string;
    password: string;
    email: string;
    message: string;
};

export class AutoPage {
    readonly page: Page; 

    readonly username: Locator;
    readonly password: Locator;
    readonly automationDropdown: Locator;
    readonly email: Locator;
    readonly message: Locator;
    readonly submitButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.getByRole('textbox', {name: 'Name'});
        this.password = page.getByRole('textbox', {name: 'Password'});
        this.automationDropdown = page.getByTestId('automation');
        this.email = page.getByRole('textbox', {name: 'Email'});
        this.message = page.getByRole('textbox', {name: 'Message'});
        this.submitButton = page.getByRole('button', {name: 'Submit'});
    }

    async goto(){
        await this.page.goto('https://practice-automation.com/form-fields/');
    }

    async fillForm(data: FormData) {
        await this.username.fill(data.name);
        await this.password.fill(data.password);
        await this.email.fill(data.email);
        await this.message.fill(data.message);
    }

    checkboxByName(name: string): Locator {
        return this.page.getByRole('checkbox', {
            name
        });
    }

    radioButtonByName(name: string): Locator {
        return this.page.getByRole('radio', {
            name
        });

    }

    async submit() {
        await this.submitButton.click();
    }
}