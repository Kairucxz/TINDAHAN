import {Injectable, NgZone} from '@angular/core';
import {ActivatedRoute, Router, RouterStateSnapshot} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationModel} from "../../model/AuthenticationModel";
import {AuthenticationStateService} from "./authentication-state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiURL = 'http://localhost:8080/api/v1/auth/authenticate/';
  constructor(
    private authenticationStateService: AuthenticationStateService,
    private router: Router,
    private httpClient: HttpClient,
  ) {}

  isAuthenticated() {
    return this.authenticationStateService.hasCurrentUser();
  }

  authenticate(user: AuthenticationModel) {
    if (user.email !== '' && user.password !== '') {
      this.httpClient.post<any>(this.apiURL, user, {headers: {'Authorization': 'Bearer '}}).subscribe((response) => {
        console.log('response received is ', response);
        user.access_token = response['access_token'];
        user.refresh_token = response['refresh_token'];
        user.userId = response['user_id'];
        this.authenticationStateService.setCurrentUser(user);
        window.location.replace("/dashboard");
      });
    }
  }

  logout() {
    this.authenticationStateService.removeCurrentUser();
  }
}
