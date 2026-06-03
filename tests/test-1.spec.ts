import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rpachallenge.com/');
  await page.locator('#TQuwC').click();
  await page.locator('#TQuwC').fill('asdasdd');
  
  await page.locator('input[name="Oq3s8"]').fill('asddasdd');
  await page.locator('input[name="1ZdZL"]').click();
  await page.locator('input[name="Oq3s8"]').fill('asddasdda');
  await page.locator('input[name="1ZdZL"]').fill('sdasdasd');
  await page.locator('input[name="DzZ2F"]').click();
  await page.locator('input[name="DzZ2F"]').fill('dad');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('input[name="79iWK"]').click();
  await page.locator('input[name="79iWK"]').fill('asasdd');
  await page.locator('input[name="q7VZh"]').click();
  await page.locator('input[name="q7VZh"]').fill('asdas');
  await page.locator('#sktEZ').click();
  await page.locator('#sktEZ').fill('dasd');
  await page.getByRole('button', { name: 'Submit' }).click();
});