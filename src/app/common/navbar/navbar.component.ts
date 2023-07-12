import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { SharedService } from 'src/app/service/shared/shared.service';

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
  drawerState$!: Observable<boolean>;

  constructor(
    private canActive : AuthenticationService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.selected = 'Dashboard';
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
    
    this.isAuthenticated = this.canActive.isAuthenticated();
    
    this.sharedService.selected$.subscribe(selected => {
      this.selected = selected;
    });

    this.drawerState$ = this.sharedService.drawerState$;
  }

  toggleDrawer() {
    this.sharedService.toggleDrawer();
  }

}
