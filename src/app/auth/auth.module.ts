import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessComponent } from './access/access.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material.module';



@NgModule({
  declarations: [
    AccessComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule
  ]
})
export class AuthModule { }
