import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/model/ProductModel';
import { AuthenticationStateService } from '../authentication/authentication-state.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(
    private httpClient: HttpClient,
    private authState: AuthenticationStateService
  ) {}
  apiURL = 'http://localhost:8080/api/v1/product/';

  getAllProduct(): Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>(this.apiURL,{headers: {'Authorization': 'Bearer '+ this.authState.getCurrentUser().access_token}});
  }
  createProduct(product: ProductModel): Observable<ProductModel> {
      return this.httpClient.post<ProductModel>(this.apiURL + 'create', product, {headers: {'Authorization': 'Bearer '+ this.authState.getCurrentUser().access_token}});
  }
  updateProduct(id: any,product: ProductModel): Observable<ProductModel> {
    return this.httpClient.put<ProductModel>(this.apiURL + `/${id}`, product, {headers: {'Authorization': 'Bearer '+ this.authState.getCurrentUser().access_token}});
  }
}
