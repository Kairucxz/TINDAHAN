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
import { CategoryModel } from 'src/app/model/CategoryModel';

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

  constructor(
    private inventoryService: InventoryService,
    private dialog: MatDialog
  ) {}

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
  @ViewChild('updateProductForm') updateProductForm!: TemplateRef<any>;
  @ViewChild('detailsProductForm') detailsProductForm!: TemplateRef<any>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.retrieveProducts();
  }

  showUpdateProductForm(): void {
    this.dialog.open(this.updateProductForm, {
      disableClose: false,
    });
  }

  showDetailsProductForm(category: CategoryModel): void {
    const dialogRef = this.dialog.open(this.detailsProductForm, {
      data: category,
    });
    dialogRef.afterClosed().subscribe((result: CategoryModel) => {
      console.log('Category details:', result);
    });
  }
}
