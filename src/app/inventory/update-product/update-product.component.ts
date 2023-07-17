import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductModel } from 'src/app/model/ProductModel';
import { CategoryService } from 'src/app/service/category/category.service';
import { InventoryService } from 'src/app/service/inventory/inventory.service';
import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  productForm!: FormGroup;
  product: ProductModel = {};
  category: any;

  constructor(
    private inventoryService: InventoryService,
    @Inject(MAT_DIALOG_DATA) public data: ProductModel,
    private dialogRef: MatDialogRef<UpdateProductComponent>,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.product = this.data;
    this.buildProductForm();
    this.loadCategory();
  }

  buildProductForm(): void {
    this.productForm = this.formBuilder.group({
      prodName: [this.product.prodName, Validators.required],
      prodDesc: [this.product.prodDesc, Validators.required],
      unitPrice: [this.product.unitPrice, Validators.required],
      quantity: [this.product.quantity, Validators.required],
      category: [this.product.category, Validators.required],
    });
  }
  checkInputError(controlName: string): boolean {
    const control = this.productForm.controls[controlName];
    return control?.invalid && (control.dirty || control.touched);
  }
  loadCategory() {
    this.categoryService.getAllCategory().subscribe({
      next: (data: any) => {
        this.category = data;
      },
      error: (e: any) => console.error(e),
    });
  }

  updateProduct(id: any): void {
    if (this.productForm.valid && this.isFormModified()) {
      this.inventoryService.updateProduct(id, this.product).subscribe(
        (response: ProductModel) => {
          alertify.set('notifier', 'position', 'top-right');
          alertify.success('Product updated successfully');
          window.location.reload();
          this.dialogRef.close();
        },
        (error: any) => {
          console.error('Error updating Product:', error);
        }
      );
    }
  }

  isFormModified(): boolean {
    const formValue = this.productForm.value;
    return (
      formValue.prodName !== this.product.prodName ||
      formValue.prodDesc !== this.product.prodDesc ||
      formValue.unitPrice !== this.product.unitPrice ||
      formValue.quantity !== this.product.quantity ||
      formValue.category !== this.product.category
    );
  }
}
