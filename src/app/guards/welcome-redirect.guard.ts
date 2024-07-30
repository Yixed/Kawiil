import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const welcomeRedirectGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  
  if(cookieService.check("loginResponse")){
    console.log("session en curso");
    router.navigate(['/home']);
    return true;
  }
  console.log("sin iniciar sesion");
  return false
};
