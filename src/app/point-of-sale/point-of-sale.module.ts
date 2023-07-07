import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointOfSaleLayoutComponent } from './point-of-sale-layout/point-of-sale-layout.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { PosTableComponent } from './pos-table/pos-table.component';
import { FormsModule } from '@angular/forms';
import { InvoiceModalComponent } from './invoice-modal/invoice.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ExistingCustomerComponent } from './existing-customer/existing-customer.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmployeeModule } from '../user-management/employee/employee.module';
import { CustomerModule } from '../user-management/customer/customer.module';

@NgModule({
  declarations: [
    PointOfSaleLayoutComponent,
    PosTableComponent,
    InvoiceModalComponent,
    ExistingCustomerComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    EmployeeModule,
    CustomerModule, // Add this line
  ],
})
export class PointOfSaleModule {}
