import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryLayoutComponent } from './inventory-layout/inventory-layout.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppMaterialModule } from '../app-material.module';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    InventoryLayoutComponent,
    InventoryTableComponent,
    AddProductComponent,
    CategoryComponent,
  ],
  imports: [CommonModule, AppMaterialModule],
})
export class InventoryModule {}
