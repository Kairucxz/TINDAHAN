import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { SettingsComponent } from './settings/settings.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';

@NgModule({
  declarations: [
    CustomerLayoutComponent,
    CustomerTableComponent,
    SettingsComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    DeleteCustomerComponent,
  ],
  exports: [AddCustomerComponent],
  imports: [CommonModule, AppMaterialModule],
})
export class CustomerModule {}
