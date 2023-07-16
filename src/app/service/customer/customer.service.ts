import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationStateService } from '../authentication/authentication-state.service';
import { CustomerModel } from 'src/app/model/CustomerModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(
    private httpClient: HttpClient,
    private authState: AuthenticationStateService
  ) {}
  apiURL = 'http://localhost:8080/api/v1/customer/';

  getAllCustomer(): Observable<CustomerModel[]> {
    return this.httpClient.get<CustomerModel[]>(this.apiURL, {
      headers: {
        Authorization: 'Bearer ' + this.authState.getCurrentUser().access_token,
      },
    });
  }
  getCustomerById(id: any): Observable<CustomerModel> {
    return this.httpClient.get<CustomerModel>(this.apiURL + id, {
      headers: {
        Authorization: 'Bearer ' + this.authState.getCurrentUser().access_token,
      },
    });
  }

  createCustomer(customer: CustomerModel): Observable<CustomerModel> {
    return this.httpClient.post<CustomerModel>(
      this.apiURL + 'create',
      customer,
      {
        headers: {
          Authorization:
            'Bearer ' + this.authState.getCurrentUser().access_token,
        },
      }
    );
  }
  updateCustomer(
    customerId: any,
    customer: CustomerModel
  ): Observable<CustomerModel> {
    return this.httpClient.put<CustomerModel>(
      this.apiURL + 'update' + '/' + customerId,
      customer,
      {
        headers: {
          Authorization:
            'Bearer ' + this.authState.getCurrentUser().access_token,
        },
      }
    );
  }

  deleteCustomer(customerId: number): Observable<CustomerModel> {
    return this.httpClient.delete<CustomerModel>(
      this.apiURL + 'delete' + '/' + customerId,
      {
        headers: {
          Authorization:
            'Bearer ' + this.authState.getCurrentUser().access_token,
        },
      }
    );
  }
}
