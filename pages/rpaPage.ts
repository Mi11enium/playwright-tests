import {Page, Locator} from '@playwright/test';
import { LoginData } from '../utils/exReader';

export class RpaPage {

    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly companyName: Locator;
    readonly roleInCompany: Locator;
    readonly address: Locator;
    readonly email: Locator;
    readonly phoneNumber: Locator;
    readonly startButton: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('rpa1-field').filter({ hasText: 'First Name' }).getByRole('textbox');
        this.lastName = page.locator('rpa1-field').filter({ hasText: 'Last Name' }).getByRole('textbox');
        this.companyName = page.locator('rpa1-field').filter({ hasText: 'Company Name' }).getByRole('textbox');
        this.roleInCompany = page.locator('rpa1-field').filter({ hasText: 'Role in Company' }).getByRole('textbox');
        this.address = page.locator('rpa1-field').filter({ hasText: 'Address' }).getByRole('textbox');
        this.email = page.locator('rpa1-field').filter({ hasText: 'Email' }).getByRole('textbox');
        this.phoneNumber = page.locator('rpa1-field').filter({ hasText: 'Phone Number' }).getByRole('textbox');
        this.startButton = page.getByRole('button', {name: 'START'});
        this.submitButton = page.getByRole('button', {name: 'submit'});
        this.successMessage = page.getByText('Congratulations!', { exact: true });
        
    }

    async goto() {
        await this.page.goto('https://rpachallenge.com/');
    }
    async start() {
        await this.startButton.click();
    }
    
    async submit() {
        await this.submitButton.click();
    }

    async inputData(data: LoginData) {
        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.companyName.fill(data.companyName);
        await this.roleInCompany.fill(data.roleInCompany);
        await this.address.fill(data.address);
        await this.email.fill(data.email);
        await this.phoneNumber.fill(data.phoneNumber.toString());
    }

}