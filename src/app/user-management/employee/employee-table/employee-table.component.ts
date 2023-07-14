import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeModel } from 'src/app/model/EmployeeModel';
import { EmployeeService } from 'src/app/service/employee/employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'fullName','user', 'roles', 'action'];
  dataSource = new MatTableDataSource<EmployeeModel>();

  employees?: EmployeeModel[];
  currentEmployees: EmployeeModel = {};
  currentIndex = -1;

  constructor(
    private employeeService: EmployeeService
  ){}

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void {
    this.employeeService.getAllEmployee().subscribe({
      next: (data: EmployeeModel[]) => {
        this.employees = data;
        this.dataSource.data = this.employees;
        console.log(this.employees);
      },
      error: (e: any) => console.error(e)
    });
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.retrieveEmployees();
  }

}
