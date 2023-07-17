import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from 'src/app/model/EmployeeModel';
import { EmployeeService } from 'src/app/service/employee/employee.service';

@Component({
  selector: 'app-settings',
  templateUrl: './employee-settings.component.html',
  styleUrls: ['./employee-settings.component.css'],
})
export class EmployeeSettingsComponent implements OnInit {
  employeeForm!: FormGroup;
  employees?: EmployeeModel[];
  employee: EmployeeModel = {};

  constructor(
    private employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data: EmployeeModel,
    private dialogRef: MatDialogRef<EmployeeSettingsComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.employee = this.data;
    this.buildEmployeeForm();
  }

  buildEmployeeForm(): void {
    this.employeeForm = this.formBuilder.group({
      firstName: [this.employee.firstName, Validators.required],
      lastName: [this.employee.lastName, Validators.required],
      address: [this.employee.address, Validators.required],
      zipCode: [this.employee.zipCode, Validators.required],
      contact: [this.employee.phone, Validators.required],
    });
  }

  checkInputError(controlName: string): boolean {
    const control = this.employeeForm.controls[controlName];
    return control?.invalid && (control.dirty || control.touched);
  }

  updateEmployee(employeeId: any): void {
    if (this.employeeForm.valid && this.isFormModified()) {
      this.employeeService.updateEmployee(employeeId, this.employee).subscribe(
        (response: EmployeeModel) => {
          console.log('Employee updated:', response);
          this.dialogRef.close();
        },
        (error: any) => {
          console.error('Error updating employee:', error);
        }
      );
    }
  }

  isFormModified(): boolean {
    const formValue = this.employeeForm.value;
    return (
      formValue.firstName !== this.employee.firstName ||
      formValue.lastName !== this.employee.lastName ||
      formValue.address !== this.employee.address ||
      formValue.zipCode !== this.employee.zipCode ||
      formValue.contact !== this.employee.phone
    );
  }
}
