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
import * as alertify from 'alertifyjs';

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
        this.dataSource.data = data;
        if (this.dataSource.data.filter((x) => x.quantity <= 5).length > 0) {
          alertify
            .alert(
              'Some of your products are running low. Please check your inventory.'
            )
            .set({ pinnable: true, modal: false })
            .setHeader('<em style="color:red"> Warning! </em> ');
        }
      },
      error: (e: any) => console.error(e),
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('updateProductForm') updateProductForm!: TemplateRef<any>;
  @ViewChild('detailsProductForm') detailsProductForm!: TemplateRef<any>;
  @ViewChild('deleteProductForm') deleteProductForm!: TemplateRef<any>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.retrieveProducts();
  }

  showUpdateProductForm(product: ProductModel): void {
    const dialogRef = this.dialog.open(this.updateProductForm, {
      data: product,
    });
    dialogRef.afterClosed().subscribe((result: ProductModel) => {
      console.log('Updated category:', result);
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

  showDeleteProductForm(category: CategoryModel): void {
    const dialogRef = this.dialog.open(this.deleteProductForm, {
      data: category,
    });
    dialogRef.afterClosed().subscribe((result: CategoryModel) => {
      console.log('Category details:', result);
    });
  }
}
