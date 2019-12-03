import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginmodel: LoginModel = new LoginModel();
  loginform: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService ) { }

  ngOnInit() {
    this.createForm();
  }

  OnSubmit() {
    this.loginmodel.email = this.loginform.value["email"];
    this.loginmodel.psw = this.loginform.value["password"]
    console.log(this.loginmodel.email);
    this.loginService.GetLogin(this.loginmodel.email)
    .snapshotChanges().subscribe(data => {
       console.log(data.payload.val());
    })
}
  createForm() {
    this.loginform = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),  
    });
  }
}
