import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const isAuthGuardGuard: CanActivateFn = (route, state) => {
  //comprobamos desde las cookies
  const cookieService = inject(CookieService);
  
  //si hay una cookie conteniendo user aceptamos
  if(cookieService.check("loginResponse")){
    console.log("Accepted");
    return true;
  }
  console.log("rejected!");
  return false
};
