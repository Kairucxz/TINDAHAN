import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit{
  currentDate: Date = new Date();
  selected: string | undefined;
  isAuthenticated : boolean = false;
  constructor(
    private canActive : AuthenticationService
  ) { }

  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
    this.isAuthenticated = this.canActive.isAuthenticated();
    this.selected = 'Dashboard'
  }

}
