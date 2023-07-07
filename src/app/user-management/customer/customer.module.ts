import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { CustomerTableComponent } from './customer-table/customer-table.component';


@NgModule({
  declarations: [
    CustomerLayoutComponent,
    CustomerTableComponent
   
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
    
  ]
})
export class CustomerModule { }
