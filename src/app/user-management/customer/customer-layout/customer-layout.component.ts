import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.css']
})
export class CustomerLayoutComponent {

  @ViewChild('addCustomerModal') addCustomerModal!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

  openCutomerRegistration(): void {
    this.dialog.open(this.addCustomerModal, {
      
      disableClose: false, 
    });
  
  }
}