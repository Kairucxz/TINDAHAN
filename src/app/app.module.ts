import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MaterialModule } from './material-module';
import { PointOfSaleModule } from './point-of-sale/point-of-sale.module';
import { CustomerModule } from './user-management/customer/customer.module';
import { EmployeeModule } from './user-management/employee/employee.module';

import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PointOfSaleModule,
    CustomerModule,
    EmployeeModule
,
    DashboardModule
    
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
