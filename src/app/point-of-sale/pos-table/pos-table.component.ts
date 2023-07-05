import { Component } from '@angular/core';


@Component({
  selector: 'app-pos-table',
  templateUrl: './pos-table.component.html',
  styleUrls: ['./pos-table.component.css']
})
export class PosTableComponent {
  displayedColumns = ['barcode', 'productproductName', 'price', 'quantity', 'totalAmount'];
  dataSource = ELEMENT_DATA;
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