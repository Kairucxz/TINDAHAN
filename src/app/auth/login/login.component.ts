import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as alertify from "alertifyjs";

// import * as http from "http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  private formSubmitAttempt!: boolean;
  apiURL = 'http://localhost:8080/api/v1/auth/authenticate/';
  headers = new Headers();

  constructor(
    private fb: FormBuilder,
    private authentication: AuthenticationService,
    private http: HttpClient,
  ) {
    // this.form = this.fb.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
    // this.headers.set('Content-Type', 'application/json');
    // this.formSubmitAttempt = false;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  checkInputError(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    return control?.invalid && (control.dirty || control.touched);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authentication.authenticate(this.loginForm.value);
      this.formSubmitAttempt = true;
    } else {
      alertify.set('notifier', 'position', 'top-right');
      alertify.error('Please fill in the form correctly');
    }
  }
}
