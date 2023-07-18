import {Component, Inject, OnInit} from '@angular/core';
import {InventoryService} from "../../service/inventory/inventory.service";
import {CustomerService} from "../../service/customer/customer.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SalesService} from "../../service/sales/sales.service";

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.css'],
})
export class AddSalesComponent implements OnInit {
  salesForm!: FormGroup;
  customerData: any;
  productsData: any;
  salesData: any;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private productService: InventoryService,
    private salesService: SalesService,
    public dialogRef: MatDialogRef<AddSalesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit() {
    this.buildSalesForm();
    this.loadAllCustomers();
    this.loadAllProducts();
  }

  buildSalesForm(): void {
    this.salesForm = this.formBuilder.group({
      customerId: ['', Validators.required],
      productId: ['', Validators.required],
      quantity: ['', Validators.required],
      amount: ['', Validators.required],
      paymentMethod: ['', Validators.required]
    });
  }

  loadAllCustomers() {
    this.customerService.getAllCustomer().subscribe({
      next: (data: any) => {
        this.customerData = data;
        console.log(this.customerData)
      },
      error: (e: any) => console.error(e)
    });
  }

  loadAllProducts() {
    this.productService.getAllProduct().subscribe({
      next: (data: any) => {
        this.productsData = data;
        console.log(this.productsData)
      },
      error: (e: any) => console.error(e)
    });
  }

  checkInputError(controlName: string): boolean {
    const control = this.salesForm.controls[controlName];
    return control?.invalid && (control.dirty || control.touched);
  }

  addSales() {
    console.log(this.salesForm.value)
    if (this.salesForm.valid) {
      this.salesService.createSales(this.salesForm.value).subscribe({
        next: (data: any) => {
          this.salesData = data;
          console.log(this.salesData);
        },
        error: (e: any) => console.error(e)
      });
    }
    this.dialogRef.close();
  }
}
