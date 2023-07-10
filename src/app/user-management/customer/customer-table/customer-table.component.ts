import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['customerName', 'creditedAmount', 'balance', 'dueDate', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild('updateCustomer') updateCustomer!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

  updateCustomerDetails(): void {
    this.dialog.open(this.updateCustomer, {
      
      disableClose: false, 
    });
  
  }

}

export interface PeriodicElement {
  customerName: string;
  creditedAmount: number;
  balance: number;
  dueDate: Date;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD'), action: ''},
]