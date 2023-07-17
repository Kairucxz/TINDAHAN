import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppMaterialModule} from "../../app-material.module";


@NgModule({
  declarations: [
    EmployeeLayoutComponent,
    EmployeeTableComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ]
})
export class EmployeeModule { }
