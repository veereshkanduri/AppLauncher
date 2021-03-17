import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { BarComponent } from './bar/bar.component';
import { GridComponent } from './grid/grid.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "bar", component: BarComponent},
  {path: "grid", component: GridComponent},
  {path: "table", component: TableComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
