import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceModalComponent implements OnInit {
  currentDate: Date = new Date();
  constructor(
    public dialogRef: MatDialogRef<InvoiceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

   ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);

  
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  saveInvoice(): void {
    console.log('Invoice saved!');
    this.dialogRef.close();
  }
}
