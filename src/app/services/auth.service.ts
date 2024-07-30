import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { ParseSourceFile } from '@angular/compiler';
import { CookieService } from 'ngx-cookie-service';
import { LoginResponse } from '../interfaces/login-response';
import { concat } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'https://backkawiilbd-1.onrender.com/user';
  loginResponse: LoginResponse | null = null;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    if(cookieService.check("loginResponse")){
    this.loginResponse = JSON.parse(this.cookieService.get('loginResponse'));
    }
  }

  //Post para login, devuelve token if true
  login(email_: string, password_: string) {
    return this.http.post(this.url + '/login', {
      email: email_,
      password: password_,
    });

    
  }

  signup(name: string, surname: string, email: string, pwd: string) {
    return this.http.post(`${this.url}/addUser`, {
      name: name,
      surname: surname,
      email: email,
      password: pwd,
    });
  }

  //Guardar datos del usuario
  saveUser(loginResponse: LoginResponse) {
    //Al usar cookies tenemos que guardar los datos en dos sitios en paralelo, variables+cookies
    //se guarda en local
    this.loginResponse = loginResponse;
    //y se guarda en cookies
    this.cookieService.set('loginResponse', JSON.stringify(loginResponse));
  }

  //logout, borra los datos actuales de usuario
  logout() {
    this.cookieService.delete('loginResponse');
    this.loginResponse = null;
  }

  getUserInvoices(idUser: string | undefined) {
    return this.http.get(`${this.url}/getInvoices/${idUser}`);
  }

  asignInvoice(idUser: string | undefined, idInvoice: String | undefined) {

    //34288723962348962
    //"_id": "386349834634589"
    //METER ID INVOICE EN EL BODY
    const body = {
      "id": idInvoice
    }
    return this.http.put(`${this.url}/asignInvoice/${idUser}`, body)
  }
}
