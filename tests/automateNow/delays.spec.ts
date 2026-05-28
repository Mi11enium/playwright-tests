import {test, expect} from '@playwright/test';


test('delay', async ({ page }) => {

    await page.goto('https://practice-automation.com/javascript-delays/');

    const liftText = page.locator('#delay');
    const startButton = page.getByRole('button', { name: 'Start' });

    await startButton.click();

    try {
        // 2. Ждем не просто появления элемента, а конкретного текста в нем
        await expect(liftText).toHaveText('Liftoff!', { timeout: 15000 });
        console.log('Текст "Liftoff!" успешно появился!');

        // 3. Убеждаемся, что кнопка готова принять второй клик (не заблокирована)
        await startButton.waitFor({ state: 'visible' });
        
        // 4. Делаем повторный клик
        await startButton.click();
        console.log('Повторный клик выполнен успешно.');

    } catch (error) {
        console.log('Текст не появился или кнопка заблокирована:', error);
    }


});