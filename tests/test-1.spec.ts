import { test, expect } from '@playwright/test';

test('Check visible of elements', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Login' })).toBeVisible();
});

test('Check names of elements', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await expect(page.getByRole('heading', { name: 'Login Page' })).toContainText('Login Page');
  await expect(page.getByText('Powered by Elemental Selenium')).toContainText('Powered by Elemental Selenium');
  
});

test('Check link', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await expect(page.getByRole('link', { name: 'Elemental Selenium' })).toHaveAttribute('href', 'http://elementalselenium.com/');
  
});