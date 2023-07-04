import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentDate: Date = new Date();

  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
}
