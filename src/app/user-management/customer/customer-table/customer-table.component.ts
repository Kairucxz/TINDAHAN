import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerModel } from 'src/app/model/CustomerModel';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { SettingsComponent } from '../settings/settings.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { DeleteCustomerComponent } from '../delete-customer/delete-customer.component';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],
})
export class CustomerTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'creditedAmount',
    'status',
    'dueDate',
    'action',
  ];

  dataSource = new MatTableDataSource<CustomerModel>();

  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.retrieveCustomer();
  }

  retrieveCustomer(): void {
    this.customerService.getAllCustomer().subscribe(
      (data: CustomerModel[]) => {
        this.dataSource.data = data.map((customer: CustomerModel) => {
          customer.dueDate = this.calculateDueDate(customer.dueDate);
          return customer;
        });
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  convertStatus(status: boolean): string {
    return status ? 'Paid' : 'Unpaid';
  }
  calculateDueDate(dateString: string | undefined): string {
    if (!dateString) {
      return '';
    }

    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const lastDayOfMonth = new Date(year, date.getMonth() + 1, 0)
      .getDate()
      .toString()
      .padStart(2, '0');
    return `${year}-${month}-${lastDayOfMonth}`;
  }

  openSettingsDialog(customer: CustomerModel): void {
    const dialogRef = this.dialog.open(SettingsComponent, {
      data: customer,
    });
    dialogRef.afterClosed().subscribe((result: CustomerModel) => {
      console.log('Updated customer:', result);
    });
  }

  viewCustomerDetails(customer: CustomerModel): void {
    const dialogRef = this.dialog.open(CustomerDetailsComponent, {
      data: customer,
    });

    dialogRef.afterClosed().subscribe((result: CustomerModel) => {
      console.log('Customer details:', result);
    });
  }

  deleteCustomer(customer: CustomerModel): void {
    const dialogRef = this.dialog.open(DeleteCustomerComponent, {
      data: customer,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        // Remove the deleted customer from the list
        this.dataSource.data = this.dataSource.data.filter(
          (item) => item.customerId !== customer.customerId
        );
      }
    });
  }
}
