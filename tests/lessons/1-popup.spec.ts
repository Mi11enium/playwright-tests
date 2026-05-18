import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://google.com');
  
  const acceptButton = page.getByRole('button', { name: 'Accept all'});
  
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
    console.log('Popup accepted');
    
  }
  
  await page.getByRole('combobox', { name: "Search" }).fill('Playwright');
  await page.keyboard.press('Enter');



});