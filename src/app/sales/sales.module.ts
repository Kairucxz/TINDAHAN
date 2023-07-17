import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { SalesLayoutComponent } from './sales-layout/sales-layout.component';
import { SalesTableComponent } from './sales-table/sales-table.component';
import { AddSalesComponent } from './add-sales/add-sales.component';

@NgModule({
  declarations: [SalesLayoutComponent, SalesTableComponent, AddSalesComponent],
  imports: [CommonModule, AppMaterialModule],
})
export class SalesModule {}
