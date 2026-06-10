import { test, expect, Page } from '@playwright/test';

/**
 * ===============================================
 * ШПАРГАЛКА PLAYWRIGHT - ПРАКТИКА
 * ===============================================
 * 
 * ОСНОВНЫЕ КОМАНДЫ И ПРИМЕРЫ:
 * 
 * 1. НАВИГАЦИЯ
 * ============
 * page.goto(url) - перейти на страницу
 * page.goBack() - вернуться назад
 * page.goForward() - перейти вперед
 * page.reload() - перезагрузить страницу
 * page.url() - получить текущий URL
 * 
 * 2. ПОИСК ЭЛЕМЕНТОВ (СЕЛЕКТОРЫ)
 * ================================
 * page.locator('css_selector') - CSS селектор
 * page.locator('xpath=//*[@id="foo"]') - XPath
 * page.getByRole('button', { name: /submit/i }) - по роли
 * page.getByLabel('Username') - по лейблу
 * page.getByPlaceholder('name@example.com') - по плейсхолдеру
 * page.getByText('Welcome') - по тексту
 * page.getByTestId('submit-button') - по data-testid
 * 
 * 3. ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ
 * ==========================
 * locator.click() - клик
 * locator.fill('text') - заполнить поле
 * locator.type('text', {delay: 100}) - печать с задержкой
 * locator.clear() - очистить поле
 * locator.press('Enter') - нажать клавишу
 * locator.selectOption('value') - выбрать в dropdown
 * locator.check() - отметить checkbox
 * locator.uncheck() - снять отметку checkbox
 * locator.hover() - наведение мышки
 * locator.screenshot() - скриншот элемента
 * 
 * 4. ПРОВЕРКИ (ASSERTIONS)
 * ==========================
 * expect(locator).toBeVisible() - видимый
 * expect(locator).toBeHidden() - скрытый
 * expect(locator).toBeEnabled() - активный
 * expect(locator).toBeDisabled() - неактивный
 * expect(locator).toHaveText('text') - содержит текст
 * expect(locator).toHaveValue('value') - имеет значение
 * expect(locator).toHaveCount(3) - количество элементов
 * expect(locator).toContainText('text') - содержит текст
 * expect(page).toHaveTitle('title') - заголовок страницы
 * expect(page).toHaveURL('url') - URL страницы
 * 
 * 5. ОЖИДАНИЯ
 * ============
 * page.waitForNavigation() - ожидание загрузки страницы
 * page.waitForLoadState('networkidle') - ожидание сети
 * page.waitForSelector('selector') - ожидание элемента
 * locator.waitFor({state: 'visible'}) - ожидание видимости
 * page.pause() - пауза (для отладки)
 * 
 * 6. ПОЛУЧЕНИЕ ИНФОРМАЦИИ
 * ==========================
 * locator.textContent() - текст элемента
 * locator.inputValue() - значение input
 * locator.getAttribute('attr') - значение атрибута
 * locator.count() - количество совпадений
 * locator.isVisible() - видимость (boolean)
 * locator.isEnabled() - активность (boolean)
 * 
 * ===============================================
 */

test.describe('PLAYGROUND - Практика Playwright', () => {

  // SETUP - выполняется перед каждым тестом
  test.beforeEach(async ({ page }) => {
    console.log('✓ Перед тестом: подготовка...');
    // Здесь можно добавить общие действия для всех тестов
  });

  // TEARDOWN - выполняется после каждого теста
  test.afterEach(async ({ page }) => {
    console.log('✓ После теста: очистка...');
  });

  // ========================================
  // РАЗДЕЛ 1: НАВИГАЦИЯ И БАЗОВЫЕ ДЕЙСТВИЯ
  // ========================================
  
  test('1.1 - Навигация: перейти на страницу и проверить URL', async ({ page }) => {
    // Переходим на страницу
    await page.goto('https://example.com');
    
    // Проверяем, что мы на правильной странице
    expect(page).toHaveURL('https://example.com/');
    
    // Или получаем URL и проверяем его
    const currentUrl = page.url();
    console.log('Текущий URL:', currentUrl);
    expect(currentUrl).toContain('example');
  });

  test('1.2 - Проверка заголовка страницы', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Проверяем заголовок страницы
    await expect(page).toHaveTitle(/Example/i);
    
    // Или получаем заголовок
    const title = await page.title();
    console.log('Заголовок страницы:', title);
  });

  test('1.3 - Получение скриншота', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Скриншот всей страницы
    await page.screenshot({ 
      path: 'screenshot-page.png',
      fullPage: true 
    });
    
    // Скриншот элемента
    const heading = page.locator('h1');
    await heading.screenshot({ path: 'screenshot-element.png' });
  });

  // ========================================
  // РАЗДЕЛ 2: СЕЛЕКТОРЫ (ПОИСК ЭЛЕМЕНТОВ)
  // ========================================

  test('2.1 - CSS селектор', async ({ page }) => {
    await page.goto('https://example.com');
    
    // CSS селектор - самый универсальный способ
    const element = page.locator('h1');
    const element2 = page.locator('.class-name');
    const element3 = page.locator('#id-name');
    const element4 = page.locator('input[type="text"]');
    
    // Комбинированные селекторы
    const complexSelector = page.locator('form > input.email-input');
    
    console.log('Найден элемент');
  });

  test('2.2 - XPath селектор', async ({ page }) => {
    await page.goto('https://example.com');
    
    // XPath селектор
    const element1 = page.locator('xpath=//*[@id="main"]');
    const element2 = page.locator('xpath=//button[text()="Click me"]');
    const element3 = page.locator('xpath=//input[@placeholder="Email"]');
    
    console.log('XPath селекторы готовы');
  });

  test('2.3 - Селекторы по роли (Recommended)', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Поиск по роли - более надежный способ
    const submitButton = page.getByRole('button', { name: /submit/i });
    const inputField = page.getByRole('textbox', { name: /username/i });
    const checkbox = page.getByRole('checkbox', { name: /agree/i });
    const link = page.getByRole('link', { name: /home/i });
    
    console.log('Селекторы по роли готовы');
  });

  test('2.4 - Селекторы по тексту и атрибутам', async ({ page }) => {
    await page.goto('https://example.com');
    
    // По тексту
    const element1 = page.getByText('Welcome');
    const element2 = page.getByText(/welcome/i); // регулярное выражение
    
    // По плейсхолдеру
    const input1 = page.getByPlaceholder('Enter your name');
    
    // По лейблу
    const input2 = page.getByLabel('Password');
    
    // По data-testid (TEST ID)
    const element3 = page.getByTestId('submit-button');
    
    console.log('Селекторы готовы');
  });

  test('2.5 - Фильтрация и уточнение селекторов', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Найти все кнопки, потом профильтровать
    const buttons = page.locator('button');
    const enabledButtons = buttons.locator(':enabled'); // только активные
    
    // Выбрать элемент по индексу
    const firstButton = page.locator('button').first();
    const lastButton = page.locator('button').last();
    const thirdButton = page.locator('button').nth(2); // индекс с 0
    
    console.log('Фильтрация готова');
  });

  // ========================================
  // РАЗДЕЛ 3: ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ
  // ========================================

  test('3.1 - Click: клик по кнопке', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Простой клик
    const button = page.getByRole('button', { name: /click/i });
    await button.click();
    
    // Двойной клик
    await button.dblclick();
    
    // Клик правой кнопкой мыши
    await button.click({ button: 'right' });
    
    // Клик при нажатой клавише Ctrl
    await button.click({ modifiers: ['Control'] });
    
    console.log('Клики выполнены');
  });

  test('3.2 - Fill и Type: заполнение полей', async ({ page }) => {
    await page.goto('https://example.com');
    
    const emailInput = page.getByPlaceholder('email');
    
    // FILL - заполнение (быстро, очищает перед заполнением)
    await emailInput.fill('user@example.com');
    
    // TYPE - печать символов (медленнее, как реальный пользователь)
    const passwordInput = page.getByPlaceholder('password');
    await passwordInput.type('MyPassword123', { delay: 50 }); // задержка между символами
    
    // CLEAR - очистить поле
    await emailInput.clear();
    
    // PRESS - нажать клавишу
    await emailInput.press('Enter');
    await passwordInput.press('Control+A'); // комбинация
    
    console.log('Заполнение полей завершено');
  });

  test('3.3 - Выбор в dropdown и checkbox', async ({ page }) => {
    await page.goto('https://example.com');
    
    // SELECT OPTION - выбрать в выпадающем списке
    const dropdown = page.locator('select');
    await dropdown.selectOption('option-value');
    // или по тексту
    await dropdown.selectOption({ label: 'Option Text' });
    
    // CHECK и UNCHECK - чекбокс
    const checkbox = page.getByRole('checkbox', { name: /agree/i });
    await checkbox.check(); // отметить
    await checkbox.uncheck(); // убрать отметку
    
    // Проверка, отмечен ли чекбокс
    const isChecked = await checkbox.isChecked();
    console.log('Чекбокс отмечен:', isChecked);
    
    // SELECT OPTION для radio кнопок
    const radio = page.getByRole('radio', { name: /option 1/i });
    await radio.check();
  });

  test('3.4 - Hover и фокус', async ({ page }) => {
    await page.goto('https://example.com');
    
    const element = page.locator('button');
    
    // HOVER - наведение мышки (для всплывающих меню)
    await element.hover();
    
    // FOCUS - фокус на элемент
    await element.focus();
    
    // BLUR - убрать фокус
    await element.blur();
    
    console.log('Hover и фокус готовы');
  });

  // ========================================
  // РАЗДЕЛ 4: ПРОВЕРКИ (ASSERTIONS)
  // ========================================

  test('4.1 - Проверка видимости и активности', async ({ page }) => {
    await page.goto('https://example.com');
    
    const button = page.getByRole('button');
    
    // Проверка видимости
    await expect(button).toBeVisible();
    // или
    await expect(button).not.toBeHidden();
    
    // Проверка активности
    await expect(button).toBeEnabled();
    // или
    await expect(button).not.toBeDisabled();
    
    // Проверка существования
    await expect(button).toBeDefined();
  });

  test('4.2 - Проверка текста и значений', async ({ page }) => {
    await page.goto('https://example.com');
    
    const heading = page.locator('h1');
    const input = page.getByRole('textbox');
    
    // Проверка текста
    await expect(heading).toHaveText('Exact Text');
    // или с регулярным выражением
    await expect(heading).toHaveText(/some text/i);
    
    // Проверка, содержит ли текст
    await expect(heading).toContainText('part of text');
    
    // Проверка значения input
    await expect(input).toHaveValue('expected value');
    
    // Проверка атрибута
    await expect(input).toHaveAttribute('type', 'email');
  });

  test('4.3 - Проверка количества элементов', async ({ page }) => {
    await page.goto('https://example.com');
    
    const buttons = page.locator('button');
    
    // Проверка количества
    await expect(buttons).toHaveCount(5);
    
    // Или получить количество
    const count = await buttons.count();
    console.log('Кнопок на странице:', count);
    expect(count).toBeGreaterThan(0);
  });

  test('4.4 - Проверка CSS класса и стиля', async ({ page }) => {
    await page.goto('https://example.com');
    
    const element = page.locator('button');
    
    // Проверка класса
    await expect(element).toHaveClass(/active/);
    
    // Получить класс
    const classList = await element.getAttribute('class');
    console.log('Классы:', classList);
  });

  // ========================================
  // РАЗДЕЛ 5: ОЖИДАНИЯ (WAITS)
  // ========================================

  test('5.1 - Ожидание видимости элемента', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Ожидание, пока элемент станет видимым
    const element = page.locator('button');
    await element.waitFor({ state: 'visible', timeout: 5000 });
    
    // Или через expect
    await expect(element).toBeVisible({ timeout: 5000 });
  });

  test('5.2 - Ожидание навигации', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Когда нажимаем на ссылку, которая ведет на другую страницу
    const link = page.getByRole('link', { name: /next/i });
    
    // Ожидание навигации
    const navigationPromise = page.waitForNavigation();
    await link.click();
    await navigationPromise;
    
    console.log('Навигация завершена');
  });

  test('5.3 - Ожидание сетевых запросов', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Ожидание, пока все сетевые запросы завершатся
    await page.waitForLoadState('networkidle');
    
    // Другие варианты:
    // 'load' - основной фрейм загружен
    // 'domcontentloaded' - DOM загружен
    // 'networkidle' - нет активных сетевых запросов
  });

  test('5.4 - Ожидание селектора и условия', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Ожидание появления элемента
    await page.waitForSelector('button', { timeout: 5000 });
    
    // Ожидание функции (полезно для проверки условий)
    await page.waitForFunction(() => {
      return document.querySelectorAll('button').length > 0;
    }, { timeout: 5000 });
  });

  test('5.5 - Пауза для отладки', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Пауза - остановит выполнение
    // В этом момент можно смотреть на Playwright Inspector
    // await page.pause();
    
    console.log('Пауза готова, но не активирована');
  });

  // ========================================
  // РАЗДЕЛ 6: ПОЛУЧЕНИЕ ИНФОРМАЦИИ
  // ========================================

  test('6.1 - Получение текста и значений', async ({ page }) => {
    await page.goto('https://example.com');
    
    const heading = page.locator('h1');
    const input = page.getByRole('textbox');
    
    // Получить текст элемента
    const headingText = await heading.textContent();
    console.log('Текст заголовка:', headingText);
    
    // Получить все текстовое содержимое (без скрытых элементов)
    const innerText = await heading.innerText();
    console.log('Внутренний текст:', innerText);
    
    // Получить значение input
    const inputValue = await input.inputValue();
    console.log('Значение input:', inputValue);
    
    // Получить HTML
    const html = await heading.innerHTML();
    console.log('HTML:', html);
  });

  test('6.2 - Получение атрибутов', async ({ page }) => {
    await page.goto('https://example.com');
    
    const link = page.getByRole('link');
    const input = page.getByRole('textbox');
    
    // Получить значение атрибута
    const href = await link.getAttribute('href');
    console.log('href:', href);
    
    const inputType = await input.getAttribute('type');
    console.log('type:', inputType);
    
    // Получить значение data-атрибута
    const testId = await page.locator('button').getAttribute('data-testid');
    console.log('data-testid:', testId);
  });

  test('6.3 - Проверка состояния элементов', async ({ page }) => {
    await page.goto('https://example.com');
    
    const button = page.getByRole('button');
    const input = page.getByRole('textbox');
    const checkbox = page.getByRole('checkbox');
    
    // Видимый ли элемент (boolean)
    const isVisible = await button.isVisible();
    console.log('Видимый:', isVisible);
    
    // Активный ли элемент
    const isEnabled = await button.isEnabled();
    console.log('Активный:', isEnabled);
    
    // Отмечен ли чекбокс
    const isChecked = await checkbox.isChecked();
    console.log('Отмечен:', isChecked);
    
    // Fokus на input
    const isFocused = await input.evaluate((el: HTMLElement) => {
      return el === document.activeElement;
    });
    console.log('В фокусе:', isFocused);
  });

  test('6.4 - Получение всех элементов', async ({ page }) => {
    await page.goto('https://example.com');
    
    const buttons = page.locator('button');
    
    // Количество элементов
    const count = await buttons.count();
    console.log('Всего кнопок:', count);
    
    // Получить все тексты
    const texts = await buttons.allTextContents();
    console.log('Все тексты кнопок:', texts);
    
    // Перебрать все элементы
    for (let i = 0; i < count; i++) {
      const text = await buttons.nth(i).textContent();
      console.log(`Кнопка ${i + 1}: ${text}`);
    }
  });

  // ========================================
  // РАЗДЕЛ 7: РАБОТА С ФОРМАМИ
  // ========================================

  test('7.1 - Заполнение и отправка формы', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Заполнение формы
    await page.getByLabel('Username').fill('testuser');
    await page.getByLabel('Password').fill('password123');
    
    // Выбор в dropdown
    const countrySelect = page.locator('select[name="country"]');
    await countrySelect.selectOption('russia');
    
    // Отметить чекбокс
    await page.getByLabel('I agree').check();
    
    // Отправить форму
    await page.getByRole('button', { name: /submit/i }).click();
    
    // Ожидание загрузки после отправки
    await page.waitForLoadState('networkidle');
    
    console.log('Форма отправлена');
  });

  test('7.2 - Работа с file input', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Загрузить файл
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles('path/to/file.txt');
    
    // Или загрузить несколько файлов
    await fileInput.setInputFiles(['file1.txt', 'file2.txt']);
    
    console.log('Файлы загружены');
  });

  test('7.3 - Очистка формы', async ({ page }) => {
    await page.goto('https://example.com');
    
    const input = page.getByRole('textbox');
    
    // Способ 1: Clear
    await input.fill('some text');
    await input.clear();
    
    // Способ 2: Ctrl+A и Delete
    await input.fill('some text');
    await input.press('Control+A');
    await input.press('Delete');
    
    console.log('Форма очищена');
  });

  // ========================================
  // РАЗДЕЛ 8: ПРАКТИЧЕСКИЕ ПРИМЕРЫ
  // ========================================

  test('8.1 - Пример: Логин на сайте', async ({ page }) => {
    // Переход на страницу логина
    await page.goto('https://example.com/login');
    
    // Проверяем, что мы на странице логина
    await expect(page).toHaveTitle(/login/i);
    
    // Заполняем форму
    await page.getByLabel('Email').fill('user@example.com');
    await page.getByLabel('Password').fill('password123');
    
    // Нажимаем кнопку логина
    await page.getByRole('button', { name: /login|sign in/i }).click();
    
    // Ожидаем загрузки
    await page.waitForLoadState('networkidle');
    
    // Проверяем, что мы залогинены (например, видим кнопку выхода)
    await expect(page.getByRole('button', { name: /logout|sign out/i })).toBeVisible();
    
    console.log('✓ Логин успешен');
  });

  test('8.2 - Пример: Проверка таблицы', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Найти все строки таблицы
    const rows = page.locator('table tbody tr');
    const rowCount = await rows.count();
    console.log('Строк в таблице:', rowCount);
    
    // Проверить первую строку
    const firstRow = rows.first();
    const firstRowText = await firstRow.textContent();
    console.log('Первая строка:', firstRowText);
    
    // Найти конкретную ячейку
    const cell = page.locator('table tbody tr:first-child td:nth-child(2)');
    const cellValue = await cell.textContent();
    console.log('Значение ячейки:', cellValue);
    
    // Проверить, что таблица не пуста
    expect(rowCount).toBeGreaterThan(0);
  });

  test('8.3 - Пример: Работа со списками', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Найти все элементы списка
    const items = page.locator('ul > li');
    const itemCount = await items.count();
    console.log('Элементов в списке:', itemCount);
    
    // Получить все тексты
    const allTexts = await items.allTextContents();
    console.log('Все элементы:', allTexts);
    
    // Найти конкретный элемент
    const specificItem = page.getByText('Specific Item');
    await expect(specificItem).toBeVisible();
    
    // Кликнуть на элемент
    await specificItem.click();
  });

  test('8.4 - Пример: Навигация по меню', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Найти меню
    const menu = page.locator('nav ul');
    
    // Найти и нажать на пункт меню
    const menuItem = page.getByRole('link', { name: /about/i });
    await menuItem.click();
    
    // Ожидание загрузки новой страницы
    await page.waitForLoadState('networkidle');
    
    // Проверяем, что мы на новой странице
    await expect(page).toHaveURL(/about/i);
  });

  test('8.5 - Пример: Проверка сообщений об ошибках', async ({ page }) => {
    await page.goto('https://example.com/login');
    
    // Пытаемся залогиниться с неправильными данными
    await page.getByLabel('Email').fill('wrong@example.com');
    await page.getByLabel('Password').fill('wrongpassword');
    await page.getByRole('button', { name: /login/i }).click();
    
    // Проверяем сообщение об ошибке
    const errorMessage = page.locator('.error-message, .alert-danger, [role="alert"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(/invalid|incorrect|error/i);
    
    const errorText = await errorMessage.textContent();
    console.log('Ошибка:', errorText);
  });

  // ========================================
  // РАЗДЕЛ 9: РАБОТА С ДАННЫМИ
  // ========================================

  test('9.1 - Используем test data', async ({ page }) => {
    const testData = {
      username: 'testuser',
      password: 'password123',
      email: 'test@example.com'
    };
    
    await page.goto('https://example.com/login');
    
    // Используем данные из объекта
    await page.getByLabel('Username').fill(testData.username);
    await page.getByLabel('Password').fill(testData.password);
    
    console.log('Заполнено:', testData);
  });

  test('9.2 - Параметризованный тест (для нескольких наборов данных)', async ({ page }) => {
    const testCases = [
      { input: 'case1', expected: 'result1' },
      { input: 'case2', expected: 'result2' },
      { input: 'case3', expected: 'result3' }
    ];
    
    for (const testCase of testCases) {
      await page.goto('https://example.com');
      
      const input = page.getByRole('textbox');
      await input.fill(testCase.input);
      
      const result = await input.inputValue();
      expect(result).toBe(testCase.input);
      
      console.log(`✓ Тест пройден для: ${testCase.input}`);
    }
  });

  // ========================================
  // РАЗДЕЛ 10: ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
  // ========================================

  test('10.1 - Пример: Пользовательская функция', async ({ page }) => {
    
    // Функция для логина
    async function login(page: Page, username: string, password: string) {
      await page.goto('https://example.com/login');
      await page.getByLabel('Username').fill(username);
      await page.getByLabel('Password').fill(password);
      await page.getByRole('button', { name: /login/i }).click();
      await page.waitForLoadState('networkidle');
    }
    
    // Используем функцию
    await login(page, 'testuser', 'password123');
    
    // Проверяем результат
    await expect(page.getByRole('button', { name: /logout/i })).toBeVisible();
    
    console.log('✓ Логин успешен');
  });

  test('10.2 - Пример: Получение и проверка информации', async ({ page }) => {
    
    async function getPageInfo(page: Page) {
      return {
        url: page.url(),
        title: await page.title(),
        headings: await page.locator('h1, h2, h3').allTextContents(),
        buttonCount: await page.locator('button').count()
      };
    }
    
    await page.goto('https://example.com');
    const info = await getPageInfo(page);
    
    console.log('Информация о странице:', info);
    expect(info.buttonCount).toBeGreaterThanOrEqual(0);
  });

  test('10.3 - Пример: Обработка исключений', async ({ page }) => {
    await page.goto('https://example.com');
    
    try {
      // Пытаемся найти элемент с коротким таймаутом
      const element = page.locator('.non-existent-element');
      await expect(element).toBeVisible({ timeout: 1000 });
    } catch (error) {
      console.log('Элемент не найден (ожидаемо)');
    }
    
    // Или проверяем, видим ли мы элемент
    const isVisible = await page.locator('.some-element').isVisible().catch(() => false);
    console.log('Элемент видим:', isVisible);
  });

});

/**
 * ===============================================
 * СОВЕТЫ И BEST PRACTICES
 * ===============================================
 * 
 * 1. Используйте getByRole() - это более надежно и доступнее
 * 2. Избегайте слишком сложных селекторов - делайте простыми
 * 3. Используйте test.describe() для группировки связанных тестов
 * 4. Добавляйте console.log() для отладки - помогает понять что происходит
 * 5. Используйте meaningful имена для тестов
 * 6. Используйте test.beforeEach() и test.afterEach() для подготовки
 * 7. Не забывайте ждать загрузку элементов перед взаимодействием
 * 8. Используйте скриншоты при ошибках (автоматически в Playwright)
 * 9. Тестируйте реальные сценарии пользователей, а не только элементы
 * 10. Разделяйте тесты логически - один тест = одна проверка
 * 
 * КОМАНДЫ ЗАПУСКА:
 * npx playwright test playground-practice.spec.ts
 * npx playwright test playground-practice.spec.ts --headed (видимый браузер)
 * npx playwright test playground-practice.spec.ts -g "2.1" (конкретный тест)
 * npx playwright test playground-practice.spec.ts --debug (отладка)
 * 
 * ===============================================
 */
