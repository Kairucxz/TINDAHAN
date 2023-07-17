import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InventoryService} from "../../service/inventory/inventory.service";
import {CategoryService} from "../../service/category/category.service";
import * as alertify from 'alertifyjs';
import {ProductModel} from "../../model/ProductModel";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  category: any;

  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService,
    private inventoryService: InventoryService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadCategory();
    this.buildProductForm();
  }

  buildProductForm(): void {
    this.productForm = this.formBuilder.group({
      prodName: ['', Validators.required],
      prodDesc: ['', Validators.required],
      unitPrice: ['', Validators.compose([Validators.required, Validators.min(0)])],
      quantity: ['', Validators.compose([Validators.required, Validators.min(0)])],
      category: ['', Validators.required]
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
      error: (e: any) => console.error(e)
    });
  }

  addProduct(): void {
    this.productForm.value['category'] = {
      id: this.productForm.value['category']
    }
    if (this.productForm.valid) {
      this.inventoryService.createProduct(this.productForm.value).subscribe({
        next: (data: any) => {
          alertify.set('notifier', 'position', 'top-right');
          alertify.success('Product Added Successfully');
          window.location.reload();
        },
        error: (e: any) => console.error(e)
      });
    }
    this.dialogRef.close();
  }
}
