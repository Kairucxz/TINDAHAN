import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { SettingsComponent } from './settings/settings.component';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [
    CustomerLayoutComponent,
    CustomerTableComponent,
    CustomerRegistrationComponent,
    SettingsComponent,
  ],
  exports: [
    CustomerRegistrationComponent
  ],
  imports: [CommonModule, AppMaterialModule],
})
export class CustomerModule {}
