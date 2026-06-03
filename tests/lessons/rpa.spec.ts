


import { test, expect } from '@playwright/test';
import { RpaPage } from '../../pages/rpaPage';
import { rdExcel, LoginData } from '../../utils/exReader';



const testData: LoginData[] = rdExcel('./test-data/challenge.xlsx','Sheet1');

test.describe('RPA Challenge', () => {
    test("FillForms", async ({page}) => {
        const rpaPage = new RpaPage(page);
        await rpaPage.goto();
        await rpaPage.start();

        expect(testData.length).toBeGreaterThan(0);
        for(const data of testData){  
            await rpaPage.inputData(data);
            await rpaPage.submit();
        };

        await expect(rpaPage.successMessage).toBeVisible();

    });

});