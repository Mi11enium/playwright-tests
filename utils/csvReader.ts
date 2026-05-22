import fs from 'fs';
import { parse } from 'csv-parse/sync';
import path from 'path';

export function readCSV(filePath: string) {

    // const fullPath = path.resolve(filePath);
    // console.log('Full File Path', fullPath);        
    const fileContent = fs.readFileSync(filePath);

    const records = parse(fileContent, {
        columns:true,
        skip_empty_lines:true
    });

    return records;
};

