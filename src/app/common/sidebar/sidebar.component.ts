import { Component } from '@angular/core';
import { SharedService } from 'src/app/service/shared/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
selected: string | undefined;

  constructor(private sharedService: SharedService) {}

  setSelected(selected: string) {
    this.sharedService.setSelected(selected);
  }

  toggleDrawer() {
    this.sharedService.toggleDrawer();
  }
}
