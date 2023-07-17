import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryLayoutComponent } from './inventory-layout/inventory-layout.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppMaterialModule } from '../app-material.module';
import { CategoryComponent } from './category/category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { RemoveCategoryComponent } from './remove-category/remove-category.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';

@NgModule({
  declarations: [
    InventoryLayoutComponent,
    InventoryTableComponent,
    AddProductComponent,
    CategoryComponent,
    UpdateProductComponent,
    ProductDetailsComponent,
    CategoryTableComponent,
    UpdateCategoryComponent,
    ViewCategoryComponent,
    RemoveCategoryComponent,
    RemoveProductComponent,
  ],
  imports: [CommonModule, AppMaterialModule],
})
export class InventoryModule {}
