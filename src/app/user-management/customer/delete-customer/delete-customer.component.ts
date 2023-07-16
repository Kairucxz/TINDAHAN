import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomerModel } from 'src/app/model/CustomerModel';
import { CustomerService } from 'src/app/service/customer/customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent {
 

  constructor(
    private customerService: CustomerService,
    @Inject(MAT_DIALOG_DATA) public data: CustomerModel,
    private dialogRef: MatDialogRef<DeleteCustomerComponent>
  ) {}

  deleteCustomer() {
    
    this.customerService.deleteCustomer(this.data.customerId).subscribe(
      () => {
        console.log('Customer deleted:', this.data.firstName);
        
        this.dialogRef.close();
      },
      (error: any) => {
        console.error('Error deleting customer:', error);
      
      }
    );
  }
  

  cancelDeletion() {
    
    console.log('Deletion cancelled');
    this.dialogRef.close();
  }
}
