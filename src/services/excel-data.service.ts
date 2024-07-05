// src/app/services/excel-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelDataService {
  constructor(private http: HttpClient) {}

  getExcelData(url: string): Observable<any[]> {
    return this.http.get(url, { responseType: 'arraybuffer' }).pipe(
      map((data) => {
        const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(worksheet);
      })
    );
  }
}
