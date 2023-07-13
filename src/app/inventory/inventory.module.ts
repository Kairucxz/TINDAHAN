import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryLayoutComponent } from './inventory-layout/inventory-layout.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    InventoryLayoutComponent,
    InventoryTableComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,

  ]
})
export class InventoryModule { }
