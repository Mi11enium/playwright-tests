import path from 'path';
import { readCSV } from './csvReader';
import { readExcel } from './excelReader';
import fs, { readFileSync } from 'fs';


export function readData(filePath: string, sheetName?: string) {

    const ext = path.extname(filePath.toLocaleLowerCase()); // определение типа файла

    switch(ext) {
        case ".csv":
            return readCSV(filePath); // использование считывателя csv
        case ".xlsx":
            return readExcel(filePath, sheetName || 'Sheet1'); // использование считывателя xlsx
        case ".json":
            const JSONData = fs.readFileSync(filePath, 'utf-8');
            return JSON.parse(JSONData);
            
        default:
            throw new Error(`Unsupported file type - ${ext}`);
    }


}
