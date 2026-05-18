import { test, expect } from '@playwright/test';


test('first', async ({ page }) => {
  await page.goto('https://realworld.qa.guru/#/register');
  await page.getByRole('textbox', { name: "Your Name"}).click();
  await page.getByRole('textbox', { name: "Your Name"}).fill('tesst1as2');
  
  await page.getByRole('textbox', { name: "Email"}).click();
  await page.getByRole('textbox', { name: "Email"}).fill('tetsat@mail.ru');
  
  await page.getByRole('textbox', { name: "Password"}).click();
  await page.getByRole('textbox', { name: "Password"}).fill('q1q2q3');
  
  await page.getByRole('button', { name: "Sign up"}).click();
  
  await page.locator('.article-preview');
  // поиск по типу
  //await page.getByRole('textbox', { name: 'Username' }).click();
  //await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  //await page.getByRole('textbox', { name: 'Password' }).click();
  //await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  //await page.getByRole('button', { name: 'Login' }).click();

  // поиск по классу (см hasText. начинается с .)
  //await page.locator('.large-6').filter({ hasText: 'Username' }).click();

  // поиск по id (начинается с #)
    // await page.locator('#username').click();
    // await page.locator('#username').fill('tomsmith');

  // поиск по атрибуту [atr="value"]
    //await page.locator('[type="text"]').click();
    //await page.locator('[type="text"]').fill('sometext');

  // Expect a title "to contain" a substring.
});