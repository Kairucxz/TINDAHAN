import {Injectable} from '@angular/core';
import {AuthenticationStateService} from "../authentication/authentication-state.service";
import {HttpClient} from "@angular/common/http";
import {SalesModel} from "../../model/SalesModel";

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  apiUrl = 'http://localhost:8080/api/v1/sales/';

  constructor(
    private httpClient: HttpClient,
    private authState: AuthenticationStateService
  ) {
  }

  fetchAllSales() {
    return this.httpClient.get(this.apiUrl, {
      headers: {
        Authorization: 'Bearer ' + this.authState.getCurrentUser().access_token,
      },
    });
  }

  createSales(sales: SalesModel) {
    return this.httpClient.post<SalesModel>(this.apiUrl + 'create', sales, {
      headers: {
        Authorization: 'Bearer ' + this.authState.getCurrentUser().access_token,
      }
    });
  }
}
