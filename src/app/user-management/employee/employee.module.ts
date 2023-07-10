import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    EmployeeLayoutComponent,
    EmployeeTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class EmployeeModule { }
