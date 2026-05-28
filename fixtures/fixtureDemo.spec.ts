/*
Fixture - Purpose
page - browser tab
browser - browser instance
context - browser context
request - API testing

https://playwright.dev/docs/test-fixtures
*/


import {test} from '@playwright/test';

test('test 1', async ({page}) => {

    console.log('I am in Test 1...');
    await page.goto('https://playwright.dev/');
    
});

test('test 2', async ({page}) => {
    
    console.log('I am in Test 2...');
    await page.goto('https://www.saucedemo.com/');


});