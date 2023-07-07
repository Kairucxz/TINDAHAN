import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-point-of-sale-layout',
  templateUrl: './point-of-sale-layout.component.html',
  styleUrls: ['./point-of-sale-layout.component.css'],

})
export class PointOfSaleLayoutComponent {
  @ViewChild('invoiceModal') invoiceModal!: TemplateRef<any>;
  @ViewChild('existingCustomerModal') existingCustomerModal!: TemplateRef<any>;
  @ViewChild('addCustomerModal') addCustomerModal!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

  openInvoiceModal(): void {
    this.dialog.open(this.invoiceModal, {
      
      disableClose: true, 
    });
  
  }

  openExistingCustomerModal(): void {
    this.dialog.open(this.existingCustomerModal, {
      
      disableClose: false, 
    });
  
  }

  openCutomerRegistration(): void {
    this.dialog.open(this.addCustomerModal, {
      
      disableClose: false, 
    });
  
  }
}
