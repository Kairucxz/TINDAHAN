import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    NgFor
  ]
})
export class DashboardModule {
  
 }
