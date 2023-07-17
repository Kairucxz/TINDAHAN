import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomerModel } from 'src/app/model/CustomerModel';
import { CustomerService } from 'src/app/service/customer/customer.service';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  customerForm!: FormGroup;
  newCustomer: CustomerModel = {
    firstName: '',
    lastName: '',
    address: '',
    contact: '',
    age: 0,
    creditedAmount: 0,
  };

  constructor(
    public dialogRef: MatDialogRef<AddCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private customerService: CustomerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildCustomerForm();
  }

  buildCustomerForm(): void {
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      contact: ['', Validators.required],
      age: ['', Validators.compose([Validators.required, Validators.min(18)])],
      creditedAmount: [
        '',
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
    });
  }

  checkInputError(controlName: string): boolean {
    const control = this.customerForm.controls[controlName];
    return control?.invalid && (control.dirty || control.touched);
  }

  saveNewCustomer(): void {
    if (this.customerForm.valid) {
      this.newCustomer = {
        firstName: this.customerForm.value.firstName,
        lastName: this.customerForm.value.lastName,
        address: this.customerForm.value.address,
        contact: this.customerForm.value.contact,
        age: this.customerForm.value.age,
        creditedAmount: this.customerForm.value.creditedAmount,
      };

      this.customerService.createCustomer(this.newCustomer).subscribe({
        next: (data: any) => {
          this.data = data;
          alertifyjs.success('Customer Successfully added');
          window.location.reload();
        },

        error: (e: any) => console.error('Error creating customer:', e),
      });
    }
    this.dialogRef.close();
  }
}
