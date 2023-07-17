import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sales-layout',
  templateUrl: './sales-layout.component.html',
  styleUrls: ['./sales-layout.component.css'],
})
export class SalesLayoutComponent {
  @ViewChild('viewSalesModal') viewSalesModal!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

  viewSalesForm(): void {
    this.dialog.open(this.viewSalesModal, {
      disableClose: false,
    });
  }
}
