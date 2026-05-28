import {test, expect} from '@playwright/test';
import navigationButtons from '../../test-data/navigationButtons.json';






// test.describe('До изменений', () => {
//     test.beforeEach(async ({page}) => {
//         await page.goto('https://practice-automation.com/');
//     });

//     test('JS Delays button', async ({ page }) => {
//         await page.getByRole('link', {name: 'JavaScript Delays'}).click();
//         await expect(page).toHaveURL('https://practice-automation.com/javascript-delays/');
//     });

//     test('Form Fields button', async ({ page }) => {
//         await page.getByRole('link', {name: 'Form Fields'}).click();
//         await expect(page).toHaveURL('https://practice-automation.com/form-fields/');
//     });

//     test('Popups button', async ({ page }) => {
//         await page.getByRole('link', {name: 'Popups'}).click();
//         await expect(page).toHaveURL('https://practice-automation.com/popups/');
//     });

//     test('Sliders button', async ({ page }) => {
//         await page.getByRole('link', {name: 'Sliders'}).click();
//         await expect(page).toHaveURL('https://practice-automation.com/slider/');
//     });

//     test('Calendars button', async ({ page }) => {
//         await page.getByRole('link', {name: 'Calendars'}).click();
//         await expect(page).toHaveURL('https://practice-automation.com/calendars/');
//     });

//     test('Modals button', async ({ page }) => {
//         await page.getByRole('link', {name: 'Modals'}).click();
//         await expect(page).toHaveURL('https://practice-automation.com/modals/');
//     });

//     test('Tables button', async ({ page }) => {
//         await page.getByRole('link', {name: 'Tables'}).click();
//         await expect(page).toHaveURL('https://practice-automation.com/tables/');
//     });

//     test('Window Operations button', async ({ page }) => {
//         await page.getByRole('link', {name: 'Window Operations'}).click();
//         await expect(page).toHaveURL('https://practice-automation.com/window-operations/');
//     });

//     test('Hover button', async ({ page }) => {
//         await page.getByRole('link', {name: 'Hover'}).click();
//         await expect(page).toHaveURL('https://practice-automation.com/hover/');
//     });

//     test('Ads button', async ({ page }) => {
//         await page.getByRole('link', {name: 'Ads'}).click();
//         await expect(page).toHaveURL('https://practice-automation.com/ads/');
//     });

//     test('Click Events button', async ({ page }) => {
//         await page.getByRole('link', {name: 'Click Events'}).click();
//         await expect(page).toHaveURL('https://practice-automation.com/click-events/');
//     });

//     test('Gestures button', async ({ page }) => {
//         await page.getByRole('link', {name: 'Gestures'}).click();
//         await expect(page).toHaveURL('https://practice-automation.com/gestures/');
//     });

//     test('File Download button', async ({ page }) => {
//         await page.getByRole('link', {name: 'File Download'}).click();
//         await expect(page).toHaveURL('https://practice-automation.com/file-download/');
//     });

// });

test.describe('После изменений', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice-automation.com/');
    });

        for (const data of navigationButtons) {
            test(`${data.name} button`, async ({ page }) => {
                await page.getByRole('link', {name: data.name}).click();
                await expect(page).toHaveURL(data.url);
            });
        };
});