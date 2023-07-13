import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { SharedService } from 'src/app/service/shared/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
selected: string | undefined;

  constructor(
    private sharedService: SharedService,
    private authentication: AuthenticationService
  ) {}

  setSelected(selected: string) {
    this.sharedService.setSelected(selected);
  }

  toggleDrawer() {
    this.sharedService.toggleDrawer();
  }

  logout() {
    this.authentication.logout();
  }
}
