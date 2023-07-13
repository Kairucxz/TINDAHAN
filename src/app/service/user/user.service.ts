import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "src/app/model/UserModel";
import { AuthenticationStateService } from "../authentication/authentication-state.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private httpClient: HttpClient,
        private authState: AuthenticationStateService
    ) {}
    apiURL = 'http://localhost:8080/api/v1/user/'

    getCurrentUser(): Observable<UserModel> {
        return this.httpClient.get<UserModel>(
            this.apiURL + this.authState.getCurrentUser().userId,
            {
                headers: {'Authorization': 'Bearer ' + this.authState.getCurrentUser().access_token}
            }
        );
    }
}