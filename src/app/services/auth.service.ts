import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { ParseSourceFile } from '@angular/compiler';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'https://backkawiilbd-1.onrender.com/user';
  user: User|null = null;
  loginResponse: LoginResponse|null = null;


  constructor(private http: HttpClient, private cookieService: CookieService) {
    if(cookieService.check("user")){
      //coger datos del userCookie
    }
  }

  //Post para login, devuelve token if true
  login(email_: string, password_: string) {
    return this.http.post(this.url + '/login', {
      email: email_,
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

  //Guardar datos del usuario
  saveUser(user: User){
    //Al usar cookies tenemos que guardar los datos en dos sitios en paralelo, variables+cookies
    this.user = user;
    //Las cookies se guardan en string
    this.cookieService.set("user", JSON.stringify(user));
  }

  //logout, borra los datos actuales de usuario
  logout(){
    this.cookieService.delete("user");
    this.user=null
  }

}