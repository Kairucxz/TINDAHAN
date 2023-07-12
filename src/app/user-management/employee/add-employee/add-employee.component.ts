import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
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

  checkInputError(control: AbstractControl): boolean {
    return control.invalid && control.touched;
  }

  saveNewEmployee(): void {
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
