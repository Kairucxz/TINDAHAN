import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointOfSaleLayoutComponent } from './point-of-sale-layout/point-of-sale-layout.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import { PosTableComponent } from './pos-table/pos-table.component';
import { FormsModule } from '@angular/forms';
import { InvoiceComponent } from './invoice/invoice.component';




@NgModule({
  declarations: [
    PointOfSaleLayoutComponent,
    PosTableComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatRadioModule,
    FormsModule
  ]
})
export class PointOfSaleModule { }
