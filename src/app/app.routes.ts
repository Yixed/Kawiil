import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { KawiilComponent } from './pages/kawiil/kawiil.component';

export const routes: Routes = 
[
   {
    path: "",
    component: HomeComponent
   },
   {
    path: "login",
    component: LoginComponent
   },
   {
    path: "signup",
    component: SignupComponent
   },
   {
    path: "kawill",
    component: KawiilComponent
   }
];
