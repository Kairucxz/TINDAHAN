import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { SharedService } from '../service/shared/shared.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css'],
})
export class AppLayoutComponent implements OnInit {
  isAuthenticated : boolean = false;
  drawerState$!: Observable<boolean>;
  
  constructor(private canActive: AuthenticationService, private sharedService: SharedService) { }

  ngOnInit() {
    this.isAuthenticated = this.canActive.isAuthenticated();
    this.drawerState$ = this.sharedService.drawerState$;
  }
}
