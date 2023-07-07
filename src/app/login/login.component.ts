import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
// import * as http from "http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  apiURL = 'http://localhost:8080/api/v1/auth/authenticate/';
  headers = new Headers();
  constructor(
    private fb: FormBuilder,
    // private authService: AuthService
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Authorization', 'Bearer ');
    this.formSubmitAttempt=false;
  }

  ngOnInit() {
    // this.form = this.fb.group({
    //   userName: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }

  isFieldInvalid(field: string) {
    // return (
    //   (!this.form.get(field).valid && this.form.get(field).touched) ||
    //   (this.form.get(field).untouched && this.formSubmitAttempt)
    // );
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // this.authService.login(this.form.value);
      this.http.post<{}>(this.apiURL, this.form.value, {headers:{'Authorization':'Bearer '}}).subscribe((response) => {
        console.log('response received is ', response);
      });
      this.formSubmitAttempt = true;
    }
  }
}
