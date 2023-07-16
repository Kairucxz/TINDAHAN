import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inventory-layout',
  templateUrl: './inventory-layout.component.html',
  styleUrls: ['./inventory-layout.component.css'],
})
export class InventoryLayoutComponent {
  @ViewChild('addNewProductModal') addNewProductModal!: TemplateRef<any>;
  @ViewChild('addNewCategoryModal') addNewCategoryModal!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

  addNewProductForm(): void {
    this.dialog.open(this.addNewProductModal, {
      disableClose: false,
    });
  }

  addNewCategoryForm(): void {
    this.dialog.open(this.addNewCategoryModal, {
      disableClose: false,
    });
  }
}
