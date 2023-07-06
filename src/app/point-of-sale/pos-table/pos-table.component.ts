import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pos-table',
  templateUrl: './pos-table.component.html',
  styleUrls: ['./pos-table.component.css']
})
export class PosTableComponent {
  @Output() grandTotalChange = new EventEmitter<number>();

  displayedColumns = ['barcode', 'productName', 'price', 'quantity', 'totalAmount'];
  dataSource = ELEMENT_DATA;

  increment(element: PeriodicElement): void {
    element.quantity++;
    this.calculateTotalAmount(element);
    this.calculateGrandTotal();
  }

  decrement(element: PeriodicElement): void {
    element.quantity--;
    this.calculateTotalAmount(element);
    this.calculateGrandTotal();
  }

  onQuantityChange(event: any, element: PeriodicElement): void {
    const value = event.target.value;
    element.quantity = parseInt(value, 10);
    this.calculateTotalAmount(element);
    this.calculateGrandTotal();
  }

  calculateTotalAmount(element: PeriodicElement): void {
    element.totalAmount = element.price * element.quantity;
  }

  calculateGrandTotal(): void {
    const grandTotal = this.dataSource.reduce((total, element) => total + element.totalAmount, 0);
    this.grandTotalChange.emit(grandTotal);
  }
}

export interface PeriodicElement {
  barcode: string;
  productName: string;
  price: number;
  quantity: number;
  totalAmount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {barcode: 'Sardines', productName: 'Hydrogen', price: 1.0079, quantity: 5, totalAmount: 150},
  {barcode: 'Sardines', productName: 'Hydrogen', price: 1.0079, quantity: 5, totalAmount: 150},
  {barcode: 'Sardines', productName: 'Hydrogen', price: 1.0079, quantity: 5, totalAmount: 150},
  {barcode: 'Sardines', productName: 'Hydrogen', price: 1.0079, quantity: 5, totalAmount: 150},
  {barcode: 'Sardines', productName: 'Hydrogen', price: 1.0079, quantity: 5, totalAmount: 150},
  {barcode: 'Sardines', productName: 'Hydrogen', price: 1.0079, quantity: 5, totalAmount: 150},
  {barcode: 'Sardines', productName: 'Hydrogen', price: 1.0079, quantity: 5, totalAmount: 150},
  {barcode: 'Sardines', productName: 'Hydrogen', price: 1.0079, quantity: 5, totalAmount: 150},
  {barcode: 'Sardines', productName: 'Hydrogen', price: 1.0079, quantity: 5, totalAmount: 150},
  {barcode: 'Sardines', productName: 'Hydrogen', price: 1.0079, quantity: 5, totalAmount: 150},
  {barcode: 'Sardines', productName: 'Hydrogen', price: 1.0079, quantity: 5, totalAmount: 150},
  {barcode: 'Sardines', productName: 'Hydrogen', price: 1.0079, quantity: 5, totalAmount: 150},
  {barcode: 'Sardines', productName: 'Hydrogen', price: 1.0079, quantity: 5, totalAmount: 150},
];
