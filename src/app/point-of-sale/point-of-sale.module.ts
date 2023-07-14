import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointOfSaleLayoutComponent } from './point-of-sale-layout/point-of-sale-layout.component';
import { PosTableComponent } from './pos-table/pos-table.component';
import { InvoiceModalComponent } from './invoice-modal/invoice.component';
import { ExistingCustomerComponent } from './existing-customer/existing-customer.component';
import { EmployeeModule } from '../user-management/employee/employee.module';
import { CustomerModule } from '../user-management/customer/customer.module';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [
    PointOfSaleLayoutComponent,
    PosTableComponent,
    InvoiceModalComponent,
    ExistingCustomerComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    EmployeeModule,
    CustomerModule,
  ],
})
export class PointOfSaleModule {}
