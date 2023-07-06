import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MaterialModule } from './material-module';
import { PointOfSaleModule } from './point-of-sale/point-of-sale.module';


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
    PointOfSaleModule,

    
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
