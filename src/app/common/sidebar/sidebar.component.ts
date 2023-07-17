import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { SharedService } from 'src/app/service/shared/shared.service';
import {AuthenticationStateService} from "../../service/authentication/authentication-state.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
selected: string | undefined;

  constructor(
    private sharedService: SharedService,
    private authentication: AuthenticationService,
    private authStateService: AuthenticationStateService
  ) {}

  setSelected(selected: string) {
    this.sharedService.setSelected(selected);
  }

  toggleDrawer() {
    this.sharedService.toggleDrawer();
  }

  isAdminAndInventoryClerk() {
    return this.authStateService.getCurrentUser().role === 'ADMIN' || this.authStateService.getCurrentUser().role === 'INVENTORY_CLERK';
  }
  isCashierAndAdmin() {
    return this.authStateService.getCurrentUser().role === 'CASHIER' || this.authStateService.getCurrentUser().role === 'ADMIN';
  }
  isAdministrator() {
    return this.authStateService.getCurrentUser().role === 'ADMIN';
  }
  logout() {
    this.authentication.logout();
  }
}
