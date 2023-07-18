import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryModel } from 'src/app/model/CategoryModel';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
  providers: [DatePipe],
})
export class ViewCategoryComponent {
  category: CategoryModel;

  constructor(
    public dialogRef: MatDialogRef<ViewCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoryModel,
    public datePipe: DatePipe
  ) {
    this.category = data;
  }
}
