import {test, expect} from '@playwright/test';
import navigationButtons from '../../test-data/navigationButtons.json';



test.beforeEach(async ({page}) => {
    await page.goto('https://practice-automation.com/');
});

for (const data of navigationButtons) {
    test(`${data.name} buttons`, async ({ page }) => {
        await page.getByRole('link', {name: data.name}).click();
        await expect(page).toHaveURL(data.url);
    });

}