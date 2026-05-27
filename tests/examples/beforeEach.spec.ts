import {test, expect} from '@playwright/test';


test.beforeEach(async ({ page }) => {
  await page.goto('http://testingchallenges.thetestingmap.org/');
});



test('first', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Testing Challenge #1 - web testing'})).toBeVisible();
});

test('second', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Submit'})).toHaveText('Submit');
});