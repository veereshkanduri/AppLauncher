import { Component, Input, OnInit } from '@angular/core';
import * as sample1 from './../../data/table/sample1.json';
import * as sample2 from './../../data/table/sample2.json'
import * as sample3 from './../../data/table/sample3.json'
import * as sample4 from './../../data/table/sample4.json'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  rowData1=[];
  rowData2=[];
  rowData3=[];
  rowData4=[];
  columnDefs1 = [
    { field: 'make', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true }
];

columnDefs2 = [
  { field: 'make2', sortable: true, filter: true },
  { field: 'model2', sortable: true, filter: true },
  { field: 'price2', sortable: true, filter: true }
];

columnDefs3 = [
  { field: 'make', sortable: true, filter: true },
  { field: 'model', sortable: true, filter: true },
  { field: 'price', sortable: true, filter: true }
];

columnDefs4 = [
  { field: 'make', sortable: true, filter: true },
  { field: 'model', sortable: true, filter: true },
  { field: 'price', sortable: true, filter: true }
];

  ngOnInit(): void {
    this.rowData1 = (sample1 as any).default;
    this.rowData2 = (sample2 as any).default;
    this.rowData3 = (sample3 as any).default;
    this.rowData4 = (sample4 as any).default;

  }

}
