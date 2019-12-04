import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginModel } from './login.model';
import { Observable } from 'rxjs';
import { AngularFireObject, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: any;

  constructor(private db: AngularFirestore) {
    this.login = this.db.collection('accounts').valueChanges()
   }

  GetLogin() {
    return this.login;
  }  
}
