import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationStateService } from '../authentication/authentication-state.service';
import { EmployeeModel } from 'src/app/model/EmployeeModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private httpClient: HttpClient,
    private authState: AuthenticationStateService
  ) { }
  apiURL = 'http://localhost:8080/api/v1/employee/';

  getAllEmployee(): Observable<EmployeeModel[]>{
    return this.httpClient.get<EmployeeModel[]>(this.apiURL,{headers: {'Authorization': 'Bearer '+ this.authState.getCurrentUser().access_token}});
  }

  createEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.httpClient.post<EmployeeModel>(this.apiURL + 'create', employee, { headers: {'Authorization': 'Bearer '+ this.authState.getCurrentUser().access_token}});
  }
}
