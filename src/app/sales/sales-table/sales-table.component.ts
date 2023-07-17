import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductModel } from 'src/app/model/ProductModel';
import { InventoryService } from 'src/app/service/inventory/inventory.service';

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.css'],
})
export class SalesTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'categoryName',
    'categoryDesc',
    'createdDate',
    'action',
  ];

  dataSource = new MatTableDataSource<ProductModel>();

  products?: ProductModel[];
  currentProduct: ProductModel = {};
  currentIndex = -1;

  constructor(
    private inventoryService: InventoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
