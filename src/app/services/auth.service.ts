import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'https://dummyjson.com/auth';
  user: User|null = null;
  
  constructor(private http: HttpClient) {}

  login(username_: string, password_: string) {
    //En post hay que darle a la api lo que pida:
    return this.http.post(this.url + '/login', {
      username: username_,
      password: password_,
    });
  } 

  saveUser(user: User){
    this.user = user;
  }

  logout(){
    this.user=null
  }

}