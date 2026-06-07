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


  Клики
  Кликнуть по элементу, по точному тексту.
  await page.click('text=Sign In');
*/