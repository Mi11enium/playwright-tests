import { test, expect } from '@playwright/test';


test('ex1', async ({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');
    await page.getByTestId('name-input').click();
    await page.getByTestId('name-input').fill('Andrew');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('q1q2q3');
    await page.getByTestId('drink2').check();
    await page.getByTestId('drink4').check();
    await page.getByTestId('color3').check();
    await page.getByTestId('automation').selectOption('yes');
    await page.getByTestId('email').click();
    await page.getByTestId('email').fill('test@mail.ru');
    await page.getByTestId('message').click();
    await page.getByTestId('message').fill('Simple text');


});