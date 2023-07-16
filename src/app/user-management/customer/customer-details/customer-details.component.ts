import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomerModel } from 'src/app/model/CustomerModel';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent {
  customer: CustomerModel;

  constructor(
    public dialogRef: MatDialogRef<CustomerDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerModel
  ) {
    this.customer = data;
  }

  convertStatus(status: boolean): string {
    return status ? 'Paid' : 'Unpaid';
  }
}
