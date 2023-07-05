import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MaterialModule } from './material-module';
import { UserManagementModule } from './user-management/user-management.module';
import { PointOfSaleModule } from './point-of-sale/point-of-sale.module';
import { CustomerManagementLayoutComponent } from './user-management/customer-management-layout/customer-management-layout.component';
import { EmployeeManagementLayoutComponent } from './user-management/employee-management-layout/employee-management-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UserManagementModule,
    PointOfSaleModule
    
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
