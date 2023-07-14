import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppMaterialModule } from 'src/app/app-material.module';



@NgModule({
  declarations: [
    EmployeeLayoutComponent,
    EmployeeTableComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class EmployeeModule { }
