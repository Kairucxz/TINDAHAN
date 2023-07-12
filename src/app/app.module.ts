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
import {AppMaterialModule} from "./app-material.module";
import {LoginComponent} from "./login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ProfileModule } from './profile/profile.module';
import { InventoryModule } from './inventory/inventory.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PointOfSaleModule,
    CustomerModule,
    EmployeeModule,
    DashboardModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProfileModule,
    InventoryModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
