/*



  Элементы, значения, поля ввода
  // Извлечь введенное значение по селектору
  const usernameValue = await page.inputValue('#username');
  // Извлечь текстовое содержимое по элементу
  const mainHeader = await page.textContent('h1');

  // Проверить извлеченное значение по точному описанию
  expect(usernameValue).toBe('user1');
  // Проверить извлеченное значение по части описания
  expect(usernameValue).toContain('user1');
  // Проверить на содержимое текста внутри локатора
  await expect(cartItemsCount).toContainText('3');


  Клики
  Кликнуть по элементу, по точному тексту.
  await page.click('text=Sign In');


  Подсчет
  Подсчет и проверка количества локаторов по заданному классу
  const titles = page.locator('.book-title');
  expect(await titles.count()).toBe(5);

  Выпадающий список
  Выбор значения из выпадающего списка
  await page.selectOption('select#categories', 'Fantasy');
  Сохранение всех значений из выпадающего списка в переменную
  const options = await page.locator('select#categories option').allInnerTexts()
  Извлечение выбранного значения из выпадающего списка и его проверка
  const selectedValue = await page.$eval('select#categories', select => select.value);
  expect(selectedValue).toBe('Literature');


  */

