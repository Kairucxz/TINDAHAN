import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductModel } from 'src/app/model/ProductModel';
import { InventoryService } from 'src/app/service/inventory/inventory.service';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css'],
})
export class RemoveProductComponent {
  constructor(
    private inventoryService: InventoryService,
    @Inject(MAT_DIALOG_DATA) public data: ProductModel,
    private dialogRef: MatDialogRef<RemoveProductComponent>
  ) {}

  deleteProduct() {
    this.inventoryService.deleteProduct(this.data.prodId).subscribe(
      () => {
        console.log('Product is deleted:', this.data.prodName);

        this.dialogRef.close();
      },
      (error: any) => {
        console.error('Error deleting Product:', error);
      }
    );
  }

  cancelDeletion() {
    console.log('Deletion cancelled');
    this.dialogRef.close();
  }
}
