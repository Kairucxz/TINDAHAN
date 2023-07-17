import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from 'src/app/service/employee/employee.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as alertify from 'alertifyjs'
import {EmployeeModel} from "../../../model/EmployeeModel";
import {UserModel} from "../../../model/UserModel";


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  userForm: FormGroup;
  hide = true;

  constructor(
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      roles: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.userForm.invalid) {
      const user: UserModel = {
        email: this.userForm.get('email')?.value,
        password: this.userForm.get('password')?.value,
        role: this.userForm.get('roles')?.value,
        employee: {
          firstName: this.userForm.get('firstName')?.value,
          lastName: this.userForm.get('lastName')?.value,
          gender: this.userForm.get('gender')?.value,
          dateOfBirth: this.userForm.get('dateOfBirth')?.value,
          phone: this.userForm.get('phone')?.value,
          address: this.userForm.get('address')?.value,
          zipCode: this.userForm.get('zipCode')?.value,
        }
      }
      console.log(user);
      this.employeeService.register(user).subscribe({
        next: (data: any) => {
          alertify.set('notifier', 'position', 'top-right');
          alertify.success('User Account Successfully Created');
          window.location.reload();
        },
        error: (e: any) => console.error(e)
      });

    }
    this.dialogRef.close();
  }
}
