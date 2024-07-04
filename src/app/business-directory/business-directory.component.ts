// src/app/components/business-directory/business-directory.component.ts
import { Component, OnInit } from '@angular/core';
import { ExcelDataService } from '../excel-data.service';

@Component({
  selector: 'app-business-directory',
  templateUrl: './business-directory.component.html',
  styleUrls: ['./business-directory.component.scss']
})
export class BusinessDirectoryComponent implements OnInit {
  businesses: any[] = [];
  private excelUrl = '../../assets/Sample.xlsx';

  constructor(private excelDataService: ExcelDataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.excelDataService.getExcelData(this.excelUrl).subscribe(
      (data) => {
        this.businesses = data;
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
