import {Component, AfterViewInit, ViewChild, OnDestroy, OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chart, registerables } from 'chart.js/auto';
import {InventoryService} from "../../service/inventory/inventory.service";
import * as alertify from 'alertifyjs'

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
  displayedColumns: string[] = ['customerName', 'creditedAmount', 'balance', 'dueDate'];
  dataSource = new MatTableDataSource<customerTable>(ELEMENT_DATA);

  constructor(
    private inventoryService: InventoryService,
  ) { }
ngOnInit() {}
  ngAfterViewInit() {
    Chart.register(...registerables);
    this.createChart();
    this.dataSource.paginator = this.paginator;

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
          { label: 'Series A', data: [65, 59, 80, 81, 56, 55], backgroundColor: '#42A5F5' },
          { label: 'Series B', data: [28, 48, 40, 19, 86, 27], backgroundColor: '#FFA726' },
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
}

export interface customerTable {
  customerName: string;
  creditedAmount: number;
  balance: number;
  dueDate: Date;
}

const ELEMENT_DATA: customerTable[] = [
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
  {customerName: 'Mark Lester Bugarin', creditedAmount: 5000, balance: 4000, dueDate: new Date('YY-MM-DD')},
]
