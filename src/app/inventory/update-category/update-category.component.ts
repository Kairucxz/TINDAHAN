import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryModel } from 'src/app/model/CategoryModel';
import { CategoryService } from 'src/app/service/category/category.service';
import * as alertify from 'alertifyjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
  providers: [DatePipe],
})
export class UpdateCategoryComponent implements OnInit {
  categoryForm!: FormGroup;
  category: CategoryModel = {};

  constructor(
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: CategoryModel,
    private dialogRef: MatDialogRef<UpdateCategoryComponent>,
    private formBuilder: FormBuilder,
    public datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.category = this.data;
    this.buildCategoryForm();
  }

  buildCategoryForm(): void {
    this.categoryForm = this.formBuilder.group({
      categoryName: [this.category.categoryName, Validators.required],
      categoryDesc: [this.category.categoryDesc, Validators.required],
    });
  }
  checkInputError(controlName: string): boolean {
    const control = this.categoryForm.controls[controlName];
    return control?.invalid && (control.dirty || control.touched);
  }

  updateCategory(id: any): void {
    if (this.categoryForm.valid && this.isFormModified()) {
      this.categoryService.updateCategory(id, this.category).subscribe(
        (response: CategoryModel) => {
          alertify.set('notifier', 'position', 'top-right');
          alertify.success('Category updated successfully');
          window.location.reload();
          this.dialogRef.close();
        },
        (error: any) => {
          console.error('Error updating Category:', error);
        }
      );
    }
  }

  isFormModified(): boolean {
    const formValue = this.categoryForm.value;
    return (
      formValue.categoryName !== this.category.categoryName ||
      formValue.categoryDesc !== this.category.categoryDesc
    );
  }
}
