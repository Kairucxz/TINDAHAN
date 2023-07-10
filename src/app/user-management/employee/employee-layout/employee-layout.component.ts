import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-layout',
  templateUrl: './employee-layout.component.html',
  styleUrls: ['./employee-layout.component.css']
})
export class EmployeeLayoutComponent {


  @ViewChild('addCustomerModal') addCustomerModal!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

  openCutomerRegistration(): void {
    this.dialog.open(this.addCustomerModal, {
      
      disableClose: false, 
    });
  
}
}
