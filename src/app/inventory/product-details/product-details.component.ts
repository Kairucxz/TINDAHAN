import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryModel } from 'src/app/model/CategoryModel';
import { ProductModel } from 'src/app/model/ProductModel';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: ProductModel;
  category: any;

  constructor(
    public dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductModel,
    private categoryService: CategoryService
  ) {
    this.product = data;
    this.loadCategory();
  }

  loadCategory() {
    this.categoryService.getAllCategory().subscribe({
      next: (data: any) => {
        this.category = data;
      },
      error: (e: any) => console.error(e),
    });
  }
}
