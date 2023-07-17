import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../service/category/category.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  addCategoryForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.buildAddCategoryForm();
  }

  buildAddCategoryForm(): void {
    this.addCategoryForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
      categoryDesc: ['', Validators.required],
    });
  }

  addNewCategoryForm(): void {
    if (this.addCategoryForm.valid) {
      this.categoryService.save(this.addCategoryForm.value).subscribe({
        next: (data: any) => {
          alertify.set('notifier', 'position', 'top-right');
          alertify.success('Category Added Successfully');
          window.location.reload();
        },
        error: (e: any) => console.error(e),
      });
    }
  }
}
