/*
Функция чтения данных из файла xlsx, конвертация и возврат данных в формате JSON
*/

import * as XLSX from 'xlsx';
import path from 'path';

export type LoginData = {
    username: string;
    password: string;
    expected: string;
    run: string; 
}


export function readExcel(filePath: string, sheetName: string): LoginData[]{

    const fullPath = path.resolve(filePath); // Получение абсолютного пути

    const workbook = XLSX.readFile(fullPath); // Чтение файла xlsx
    const sheet = workbook.Sheets[sheetName]; // Чтение листа файла
    const data = XLSX.utils.sheet_to_json<LoginData>(sheet); // Форматирование данных листа в JSON
    return data;

}