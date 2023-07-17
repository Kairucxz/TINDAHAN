import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryModel } from 'src/app/model/CategoryModel';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-remove-category',
  templateUrl: './remove-category.component.html',
  styleUrls: ['./remove-category.component.css'],
})
export class RemoveCategoryComponent {
  constructor(
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: CategoryModel,
    private dialogRef: MatDialogRef<RemoveCategoryComponent>
  ) {}

  deleteCategory() {
    this.categoryService.deleteCategory(this.data.id).subscribe(
      () => {
        console.log('Category deleted:', this.data.categoryName);
        window.location.reload();
      },
      (error: any) => {
        console.error('Error deleting category:', error);
      }
    );
  }

  cancelDeletion() {
    console.log('Deletion cancelled');
    this.dialogRef.close();
  }
}
