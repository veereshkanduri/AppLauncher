import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColCardsComponent } from './col-cards/col-cards.component';
import { HomeComponent } from './home/home.component';
import { BarComponent } from './bar/bar.component';
import { GridComponent } from './grid/grid.component';
import { TableComponent } from './table/table.component';
import { CoreTable } from './table/core/table.core.component';
import {CoreGrid} from './grid/core/grid.core.component';
import {CoreBar} from './bar/core/bar.core.component';

@NgModule({
  declarations: [
    AppComponent,
    ColCardsComponent,
    HomeComponent,
    BarComponent,
    GridComponent,
    TableComponent,
    CoreTable,
    CoreGrid,
    CoreBar
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
