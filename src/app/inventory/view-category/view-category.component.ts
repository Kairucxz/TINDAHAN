import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryModel } from 'src/app/model/CategoryModel';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
})
export class ViewCategoryComponent {
  category: CategoryModel;

  constructor(
    public dialogRef: MatDialogRef<ViewCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoryModel
  ) {
    this.category = data;
  }
}
