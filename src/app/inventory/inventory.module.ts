import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryLayoutComponent } from './inventory-layout/inventory-layout.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppMaterialModule } from '../app-material.module';



@NgModule({
  declarations: [
    InventoryLayoutComponent,
    InventoryTableComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class InventoryModule { }
