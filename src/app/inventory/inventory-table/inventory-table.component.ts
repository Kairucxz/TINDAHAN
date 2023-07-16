import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductModel } from 'src/app/model/ProductModel';
import { InventoryService } from 'src/app/service/inventory/inventory.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css'],
})
export class InventoryTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'prodName',
    'prodDesc',
    'unitPrice',
    'quantity',
    'action',
  ];
  dataSource = new MatTableDataSource<ProductModel>();

  products?: ProductModel[];
  currentProduct: ProductModel = {};
  currentIndex = -1;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.inventoryService.getAllProduct().subscribe({
      next: (data: ProductModel[]) => {
        this.products = data;
        this.dataSource.data = this.products;
        console.log(data);
      },
      error: (e: any) => console.error(e),
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.retrieveProducts();
  }
}

const ELEMENT_DATA: ProductModel[] = [];
