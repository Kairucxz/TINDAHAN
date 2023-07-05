import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointOfSaleLayoutComponent } from './point-of-sale-layout/point-of-sale-layout.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    PointOfSaleLayoutComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PointOfSaleModule { }
