import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';
import { AppMaterialModule } from '../app-material.module';



@NgModule({
  declarations: [
    ProfileLayoutComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class ProfileModule {
  
 }
