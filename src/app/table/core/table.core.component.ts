import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'core-table',
  template: `<ag-grid-angular
                style="width: 500px; height: 250px;"
                class="ag-theme-alpine"
                [rowData]="rowData"
                [columnDefs]="columnDefs"></ag-grid-angular>`,
})
export class CoreTable implements OnInit {

@Input() rowData:any;
@Input() columnDefs:any;
  constructor() { }
  ngOnInit(): void {
  }

}
