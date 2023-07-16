import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  addCategoryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildAddCategoryForm();
  }

  buildAddCategoryForm(): void {
    this.addCategoryForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addNewCategoryForm(): void {
    if (this.addCategoryForm.valid) {
      console.log('New category added:', this.addCategoryForm.value);

      this.addCategoryForm.reset();
    }
  }
}
