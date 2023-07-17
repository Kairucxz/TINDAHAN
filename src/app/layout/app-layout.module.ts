import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../common/footer/footer.component';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { SidebarComponent } from '../common/sidebar/sidebar.component';
import { AppMaterialModule } from '../app-material.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { PointOfSaleModule } from '../point-of-sale/point-of-sale.module';
import { CustomerModule } from '../user-management/customer/customer.module';
import { EmployeeModule } from '../user-management/employee/employee.module';
import { InventoryModule } from '../inventory/inventory.module';
import { ProfileModule } from '../profile/profile.module';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AppLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    PointOfSaleModule,
    CustomerModule,
    EmployeeModule,
    DashboardModule,
    ProfileModule,
    InventoryModule,
    MatNativeDateModule
  ]
})
export class AppLayoutModule { }
