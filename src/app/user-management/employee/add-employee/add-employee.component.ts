import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeModel } from 'src/app/model/EmployeeModel';
import { EmployeeService } from 'src/app/service/employee/employee.service';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  newEmployee: EmployeeModel = {
    firstName: '',
    lastName: '',
    address: '',
    username: '',
    password: '',
    userType: 'USER', 
  };

  constructor(
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {}

  checkIfEmployeeValid(): boolean {
    return (
      this.newEmployee.firstName != '' &&
      this.newEmployee.lastName != '' &&
      this.newEmployee.address != '' &&
      this.newEmployee.username != '' &&
      this.newEmployee.password != '' &&
      this.newEmployee.userType != 'USER'
    )
  }

  saveNewEmployee(): void {
    if (this.checkIfEmployeeValid()) {
      this.employeeService.createEmployee(this.newEmployee).subscribe(
        (response: EmployeeModel) => {
          console.log('New employee created:', response);
          this.dialogRef.close();
        },
        (error: any) => {
          console.error('Error creating employee:', error);
        }
      );
    }
  }
}
