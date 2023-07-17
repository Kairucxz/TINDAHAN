import {Component, AfterViewInit, ViewChild, OnDestroy, OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chart, registerables } from 'chart.js/auto';
import {InventoryService} from "../../service/inventory/inventory.service";
import * as alertify from 'alertifyjs'
import { CustomerModel } from 'src/app/model/CustomerModel';
import { CustomerService } from 'src/app/service/customer/customer.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('dashboardChart') barChartRef: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private chart: Chart | undefined;
  private resizeObserver: ResizeObserver | undefined;
  displayedColumns: string[] = ['name', 'creditedAmount', 'status', 'dueDate'];
  dataSource = new MatTableDataSource<CustomerModel>();

  constructor(
    private inventoryService: InventoryService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    Chart.register(...registerables);
    this.createChart();
    this.dataSource.paginator = this.paginator;
    this.retrieveCustomer();

    // Initialize ResizeObserver to detect changes in view size
    this.resizeObserver = new ResizeObserver(() => {
      this.updateChart();
    });
    this.resizeObserver.observe(this.barChartRef.nativeElement);
  }

  ngOnDestroy() {
    // Clean up the ResizeObserver
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private createChart() {
    // Destroy the previous chart instance if exists
    if (this.chart) {
      this.chart.destroy();
    }

    // Create the new chart
    this.chart = new Chart(this.barChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          { label: 'Orders', data: [65, 59, 80, 81, 56, 55], backgroundColor: '#42A5F5' },
          { label: 'Credit', data: [28, 48, 40, 19, 86, 27], backgroundColor: '#FFA726' },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true
      },
    });
  }

  private updateChart() {
    // Update the chart size to fit the new container dimensions
    if (this.chart) {
      this.chart.resize();
    }
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
}
