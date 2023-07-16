import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerModel } from 'src/app/model/CustomerModel';
import { CustomerService } from 'src/app/service/customer/customer.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  customerForm!: FormGroup;
  customer: CustomerModel = {};

  constructor(
    private customerService: CustomerService,
    @Inject(MAT_DIALOG_DATA) public data: CustomerModel,
    private dialogRef: MatDialogRef<SettingsComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.customer = this.data;
    this.buildCustomerForm();
  }

  buildCustomerForm(): void {
    this.customerForm = this.formBuilder.group({
      firstName: [this.customer.firstName, Validators.required],
      lastName: [this.customer.lastName, Validators.required],
      address: [this.customer.address, Validators.required],
      contact: [this.customer.contact, Validators.required],
      age: [this.customer.age, Validators.required],
    });
  }

  checkInputError(controlName: string): boolean {
    const control = this.customerForm.controls[controlName];
    return control?.invalid && (control.dirty || control.touched);
  }

  updateCustomer(customerId: any): void {
    if (this.customerForm.valid && this.isFormModified()) {
      this.customerService.updateCustomer(customerId, this.customer).subscribe(
        (response: CustomerModel) => {
          console.log('Customer updated:', response);
          this.dialogRef.close();
        },
        (error: any) => {
          console.error('Error updating customer:', error);
        }
      );
    }
  }

  isFormModified(): boolean {
    const formValue = this.customerForm.value;
    return (
      formValue.firstName !== this.customer.firstName ||
      formValue.lastName !== this.customer.lastName ||
      formValue.address !== this.customer.address ||
      formValue.contact !== this.customer.contact ||
      formValue.age !== this.customer.age
    );
  }
}
