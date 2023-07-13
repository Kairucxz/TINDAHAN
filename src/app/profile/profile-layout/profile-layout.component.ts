import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserModel } from 'src/app/model/UserModel';
import { AuthenticationStateService } from 'src/app/service/authentication/authentication-state.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.css']
})
export class ProfileLayoutComponent {
  public currentUser: UserModel;
  constructor(private userService: UserService) {
    this.currentUser = new UserModel();
    userService.getCurrentUser().subscribe(
      (user: UserModel) => {
        this.currentUser = user;
      }
    );
  }

  enableSelect = new FormControl(false);
}
