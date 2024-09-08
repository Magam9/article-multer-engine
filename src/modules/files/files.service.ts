import { Injectable } from '@nestjs/common';
import { CellValue, Row, Worksheet } from 'exceljs';

@Injectable()
export class FilesService {
  format(data: Worksheet): Array<Record<string, unknown>> {
    const list: string[][] = [];
    data.eachRow((row: Row) => {
      list.push([...(row.values as CellValue[])].splice(1) as string[]);
    });
    if (!list.length) {
      return [];
    }
    const [fields, ...values] = list;
    return values.map((valuesItem) =>
      (fields as string[]).reduce(
        (acc, field, index) =>
          Object.assign(acc, { [field]: valuesItem[index] }),
        {},
      ),
    );
  }
}
