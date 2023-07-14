import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class DashboardModule {
  
 }
