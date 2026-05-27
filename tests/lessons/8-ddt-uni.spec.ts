

/*
Goal - create a generic data reader utulity that:
- Detect file type automaticaly
- Reads CSV, Excel, JSON
- Returns unified test data
- Works with the same Playwright test

Architecture:
/test-data
  loginData.csv
  loginData.xlsx
  loginData.json

/utils
  csvReader.ts
  excelReader.ts
  dataReader.ts  <- unified engine

/tests
  8-ddt-uni.spec.ts


1. In utils folder create Unified Data Reader dataReader.ts
2. Use Unified Data Reader in test 8-ddt-uni.spec.ts 
*/




/*
1.
intall required libraries:
npm install xlsx
npm install -D @types/xlsx

2. In test-data folder create a excel file LoginData.xlsx and add data

3. In utils folder create Excel Utility Function excelReader.ts 

4. Use Excel Data in Test 7-ddt-excel.spec.ts

IMPROVE CODE

1. Make sure readExcel returs proper type
2. Type testData properly in 7-ddt-excel.spec.ts
3. Remove as any[] in 7-ddt-excel.spec.ts
4. Add test.step() for better reporting

Final Mental Model
Excel -> Loop -> Create Test -> Execute -> Assert

Each Excel row = one test case 
*/



import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { readData } from '../../utils/dataReader';


const testData = readData('./test-data/LoginData.xlsx','Sheet1');
// const testData = readData('./test-data/LoginData.csv');
// const testData = readData('./test-data/loginDataNew.json');

test.describe('Login Tests', () => {

    for(const data of testData){

        if(data.run !== 'true') continue;

        test(`Login test for ${data.username}`, async ({page}) => {

            const loginPage = new LoginPage(page);

            await test.step('Go to login page', async () => {
                await loginPage.gotoLoginPage();
            });

            await test.step('Peform Login', async () => {
                await loginPage.login(data.username, data.password);
            });

            await test.step('Validate Results', async () => {
                if(data.expected === 'success') {
                    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
                } else {
                    await expect(loginPage.errorMessage).toBeVisible();
                }
            });



        });

    }

});