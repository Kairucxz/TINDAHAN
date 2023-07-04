import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatIconModule, MatSlideToggleModule],
})
export class TableComponent implements AfterViewInit  {
  displayedColumns: string[] = ['id', 'employeeName', 'emailAddress', 'homeAddress', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  viewItem(element: PeriodicElement) {
    console.log('View item:', element);
  }

  deleteItem(element: PeriodicElement) {
    // Handle the delete action
  }

  disableItem(element: PeriodicElement) {
    // Handle the disable action
  }

  openDialog(element: PeriodicElement) {
    // Handle the disable action
  }
}

export interface PeriodicElement {
  employeeName: string;
  id: number;
  emailAddress: string;
  homeAddress: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, employeeName: 'Mark Lester Bugarin', emailAddress: 'bugarin@mail.com', homeAddress: 'Taguig City', action:''},
  {id: 2, employeeName: 'Kyle Marin', emailAddress: 'marin@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 3, employeeName: 'Raine Edianel', emailAddress: 'edianel@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 4, employeeName: 'Marco San Juan', emailAddress: 'marco@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 5, employeeName: 'Xavier Matthiue', emailAddress: 'xavier@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 6, employeeName: 'Allyssa Espiritu', emailAddress: 'allyssa@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 7, employeeName: 'James Erne', emailAddress: 'erne@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 8, employeeName: 'Emmanuel Peradilla', emailAddress: 'peradilla@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 9, employeeName: 'Jon Liwag', emailAddress: 'liwag@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 10, employeeName: 'Jayvee Escano', emailAddress: 'escano@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 11, employeeName: 'Rey Mendillo', emailAddress: 'mendillo@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 12, employeeName: 'Jane Tesorero', emailAddress: 'jane@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 13, employeeName: 'Queenie Carandang', emailAddress: 'queen@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 14, employeeName: 'Troy Miguel', emailAddress: 'troy@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 15, employeeName: 'Aldrin Lorenzo', emailAddress: 'aldrin@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 16, employeeName: 'Jerome Calicdan', emailAddress: 'calicdan@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 17, employeeName: 'Edward Jasper', emailAddress: 'jasper@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 18, employeeName: 'Remer Alhamid', emailAddress: 'remer@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 19, employeeName: 'Jean Leanard', emailAddress: 'jean@mail.com', homeAddress: 'Taguig City', action: ''},
  {id: 20, employeeName: 'Ruby Roxas', emailAddress: 'ruby@mail.com', homeAddress: 'Taguig City', action: ''},
];