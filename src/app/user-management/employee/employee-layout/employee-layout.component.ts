import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-layout',
  templateUrl: './employee-layout.component.html',
  styleUrls: ['./employee-layout.component.css']
})
export class EmployeeLayoutComponent {


  @ViewChild('addEmployeeModal') addEmployeeModal!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

  openEmployeeRegistration(): void {
    this.dialog.open(this.addEmployeeModal, {
      
      disableClose: false, 
    });
  
}
}
