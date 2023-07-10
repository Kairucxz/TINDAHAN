import {Inject, Injectable} from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import {AuthenticationModel} from "../../model/AuthenticationModel";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationStateService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }


  public setCurrentUser(authenticationModel: AuthenticationModel): void {
    this.storage.set("CURRENT_USER", JSON.stringify(authenticationModel));
  }

  public getCurrentUser(): AuthenticationModel {
    return JSON.parse(this.storage.get("CURRENT_USER"));
  }

  public hasCurrentUser() {
    if (this.storage.get("CURRENT_USER")) {
      return true;
    }
    return false;
  }

  public removeCurrentUser() {
    this.storage.remove("CURRENT_USER");
  }
}
