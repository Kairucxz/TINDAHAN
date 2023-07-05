import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EmployeeManagementLayoutComponent } from './employee-management-layout/employee-management-layout.component';
import { MaterialModule } from '../material-module';
import { CustomerManagementLayoutComponent } from './customer-management-layout/customer-management-layout.component';




@NgModule({
  declarations: [
    EmployeeManagementLayoutComponent,
    CustomerManagementLayoutComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MaterialModule
    
  ]
})
export class UserManagementModule { }
