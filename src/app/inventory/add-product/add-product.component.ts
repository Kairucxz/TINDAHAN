import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {InventoryService} from "../../service/inventory/inventory.service";
import {CategoryService} from "../../service/category/category.service";
import * as alertify from 'alertifyjs'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form:FormGroup;
  category: any;
  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService,
    private inventoryService: InventoryService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      prodName: new FormControl('', [Validators.required]),
      prodDesc: new FormControl('', [Validators.required]),
      unitPrice: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
    this.loadCategory();
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
    this.form.value['category'] = {
      id: this.form.value['category']
    }
    if (!this.form.invalid) {
      this.inventoryService.createProduct(this.form.value).subscribe({
        next: (data: any) => {
          this.data = data;
          alertify.success('Product Added Successfully');
          window.location.reload();
        },
        error: (e: any) => console.error(e)
      });
    }
      this.dialogRef.close();
  }
}
