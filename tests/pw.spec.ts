import {test, expect} from '@playwright/test'


test.describe('Тесты главной страницы heroku', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
  });
  test('Проверка видимости элементов', async ({ page }) => {
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    await expect(page.getByRole('button', { name: ' Login' })).toBeVisible();
  });

  test('Проверк имен элементов', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Login Page' })).toContainText('Login Page');
    await expect(page.getByText('Powered by Elemental Selenium')).toContainText('Powered by Elemental Selenium');
    
  });

  test('Проверка ссылки в футере', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Elemental Selenium' })).toHaveAttribute('href', 'http://elementalselenium.com/');
  });
  
});

test.describe('Тесты главной страницы playwright.dev', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('https://playwright.dev/');
  })

  test('Проверка переключения light mode', async ({ page }) => {
      
      await page.getByRole('button', { name: 'Switch between dark and light' }).click();
      await expect(page.getByRole('button', { name: 'Switch between dark and light mode (currently light mode)'})).toHaveAttribute('title', 'light mode');  

  });

  test('Проверка заголовка', async ({ page }) => {

      await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText('Playwright enables reliable web automation for testing, scripting, and AI agents.');

  });

  test('Проверка кнопки Get started', async ({ page }) => {

      await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Get started'})).toContainText('Get started');
      await expect(page.getByRole('link', { name: 'Get started'})).toHaveAttribute('href', '/docs/intro');


  });

});