import {test, expect} from '@playwright/test'


test('Проверка переключения light mode', async ({ page }) => {

    await page.goto('https://playwright.dev/');
    
    await page.getByRole('button', { name: 'Switch between dark and light' }).click();
    await expect(page.getByRole('button', { name: 'Switch between dark and light mode (currently light mode)'})).toHaveAttribute('title', 'light mode');  

});

test('Проверка заголовка', async ({ page }) => {

    await page.goto('https://playwright.dev/');
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText('Playwright enables reliable web automation for testing, scripting, and AI agents.');

});

test('Проверка кнопки Get started', async ({ page }) => {

    await page.goto('https://playwright.dev/');
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Get started'})).toContainText('Get started');
    await expect(page.getByRole('link', { name: 'Get started'})).toHaveAttribute('href', '/docs/intro');

});