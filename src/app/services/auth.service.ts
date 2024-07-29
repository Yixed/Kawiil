import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { ParseSourceFile } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'https://backkawiilbd-1.onrender.com/user/';
  user: User|null = null;
  
  constructor(private http: HttpClient) {}

  login(username_: string, password_: string) {
    //En post hay que darle a la api lo que pida:
    return this.http.post(this.url + '/login', {
      username: username_,
      password: password_,
    });
  } 

  signup(name: string, surname: string, email: string,  pwd: string){
    return this.http.post(
      `${this.url}/addUser`,
      {
        name: name,
        surname: surname,
        email: email,
        password: pwd
      }
    
  )

  }

  saveUser(user: User){
    this.user = user;
  }

  logout(){
    this.user=null
  }

}