import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationStateService} from "../authentication/authentication-state.service";
import {Observable} from "rxjs";
import {CategoryModel} from "../../model/CategoryModel";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiURL = 'http://localhost:8080/api/v1/category/';
  constructor(
    private httpClient: HttpClient,
    private authState: AuthenticationStateService
  ) { }
  getAllCategory(): Observable<CategoryModel[]>{
    return this.httpClient.get<CategoryModel[]>(this.apiURL,{headers: {'Authorization': 'Bearer '+ this.authState.getCurrentUser().access_token}});
  }
  save(category: CategoryModel): Observable<CategoryModel> {
    return this.httpClient.post<CategoryModel>(this.apiURL + 'create', category,{headers: {'Authorization': 'Bearer '+ this.authState.getCurrentUser().access_token}});
  }


}
