import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['employeeId', 'employeeName', 'emailAddress', 'roles', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  employeeId: string;
  employeeName: string;
  emailAddress: string;
  roles: boolean;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {employeeId: 'E00012', employeeName:'Mark Lester Bugarin', emailAddress: 'lester@mail.com', roles: true, action: ''},
  {employeeId: 'E00014', employeeName:'Xavier Mathieu', emailAddress: 'xavier@mail.com', roles: true, action: ''},
  {employeeId: 'E00016', employeeName:'Kyle Marin', emailAddress: 'kyle@mail.com', roles: true, action: ''},
  {employeeId: 'E00017', employeeName:'Rubyrose Roxas', emailAddress: 'ruby@mail.com', roles: true, action: ''},
  {employeeId: 'E00012', employeeName:'Mark Lester Bugarin', emailAddress: 'lester@mail.com', roles: true, action: ''},
  {employeeId: 'E00014', employeeName:'Xavier Mathieu', emailAddress: 'xavier@mail.com', roles: true, action: ''},
  {employeeId: 'E00016', employeeName:'Kyle Marin', emailAddress: 'kyle@mail.com', roles: true, action: ''},
  {employeeId: 'E00017', employeeName:'Rubyrose Roxas', emailAddress: 'ruby@mail.com', roles: true, action: ''},
  {employeeId: 'E00012', employeeName:'Mark Lester Bugarin', emailAddress: 'lester@mail.com', roles: true, action: ''},
  {employeeId: 'E00014', employeeName:'Xavier Mathieu', emailAddress: 'xavier@mail.com', roles: true, action: ''},
  {employeeId: 'E00016', employeeName:'Kyle Marin', emailAddress: 'kyle@mail.com', roles: true, action: ''},
  {employeeId: 'E00017', employeeName:'Rubyrose Roxas', emailAddress: 'ruby@mail.com', roles: true, action: ''},
  {employeeId: 'E00012', employeeName:'Mark Lester Bugarin', emailAddress: 'lester@mail.com', roles: true, action: ''},
  {employeeId: 'E00014', employeeName:'Xavier Mathieu', emailAddress: 'xavier@mail.com', roles: true, action: ''},
  {employeeId: 'E00016', employeeName:'Kyle Marin', emailAddress: 'kyle@mail.com', roles: true, action: ''},
  {employeeId: 'E00017', employeeName:'Rubyrose Roxas', emailAddress: 'ruby@mail.com', roles: true, action: ''},
  {employeeId: 'E00012', employeeName:'Mark Lester Bugarin', emailAddress: 'lester@mail.com', roles: true, action: ''},
  {employeeId: 'E00014', employeeName:'Xavier Mathieu', emailAddress: 'xavier@mail.com', roles: true, action: ''},
  {employeeId: 'E00016', employeeName:'Kyle Marin', emailAddress: 'kyle@mail.com', roles: true, action: ''},
  {employeeId: 'E00017', employeeName:'Rubyrose Roxas', emailAddress: 'ruby@mail.com', roles: true, action: ''},
  {employeeId: 'E00012', employeeName:'Mark Lester Bugarin', emailAddress: 'lester@mail.com', roles: true, action: ''},
  {employeeId: 'E00014', employeeName:'Xavier Mathieu', emailAddress: 'xavier@mail.com', roles: true, action: ''},
  {employeeId: 'E00016', employeeName:'Kyle Marin', emailAddress: 'kyle@mail.com', roles: true, action: ''},
  {employeeId: 'E00017', employeeName:'Rubyrose Roxas', emailAddress: 'ruby@mail.com', roles: true, action: ''},
]