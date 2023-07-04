import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  currentDate: Date = new Date();
  selected: string | undefined;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);

    this.selected = 'Dashboard'
  }
}
