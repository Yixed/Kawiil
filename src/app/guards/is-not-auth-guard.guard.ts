import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const isNotAuthGuardGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  
  if(cookieService.check("loginResponse")){
    console.log("Rejectedd");
    return false;
  }
  console.log("Accepted!");
  return true
};
