import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginmodel: LoginModel = new LoginModel();
  loginform: FormGroup;
  datamodel: any;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.loginService.GetLogin()
      .subscribe(data => {
        console.log(data);
        this.datamodel = data;
      })
  }

  OnSubmit() {
    this.loginmodel.email = this.loginform.value["email"];
    this.loginmodel.psw = this.loginform.value["password"]
    console.log(this.loginmodel.email);
    console.log(this.datamodel);
    this.datamodel.forEach(element => {
      if (element['username'] === this.loginmodel.email && element['password'] === this.loginmodel.psw) {
        console.log(element)
        sessionStorage.setItem('loginStatus', '1');
        sessionStorage.setItem('sessionUsername', element['username']);
        sessionStorage.setItem('sessionUrl', element['server']);
        this.router.navigate(['overview']);
      } else {
        
        sessionStorage.setItem('loginStatus', '0');
        console.log('error');
      }

    });

  }
  createForm() {
    this.loginform = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}
