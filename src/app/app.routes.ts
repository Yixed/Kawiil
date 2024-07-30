import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/welcome/login/login.component';
import { SignupComponent } from './pages/welcome/signup/signup.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ExpensesComponent } from './pages/home/expenses/expenses.component';
import { ReportsComponent } from './pages/home/reports/reports.component';
import { ProfileComponent } from './pages/home/profile/profile.component';
import { InvoiceDetailsComponent } from './pages/home/invoice-details/invoice-details.component';
import { isAuthGuardGuard } from './guards/is-auth-guard.guard';
import { isNotAuthGuardGuard } from './guards/is-not-auth-guard.guard';
import { welcomeRedirectGuard } from './guards/welcome-redirect.guard';
import { AddInvoiceComponent } from './pages/home/add-invoice/add-invoice.component';

export const routes: Routes = [
    {
        path: "",
        component: WelcomeComponent,
        canActivate: [welcomeRedirectGuard]
    },
    {
        path: "login",
        component: LoginComponent,
        canActivate: [isNotAuthGuardGuard]
    },
    {
        path: "signup",
        component: SignupComponent,
        canActivate: [isNotAuthGuardGuard]
    },
    {
        path: "home",
        component: HomeComponent,
        canActivate: [isAuthGuardGuard]
    },
    {
        path: "expenses",
        component: ExpensesComponent,
        canActivate: [isAuthGuardGuard]
    },
    {
        path: "reports",
        component: ReportsComponent,
        canActivate: [isAuthGuardGuard]
    },
    {
        path: "profile",
        component: ProfileComponent,
        canActivate: [isAuthGuardGuard]
    },
    {
        path: "editInvoice",
        component: InvoiceDetailsComponent,
        canActivate: [isAuthGuardGuard]
    },
    {
        path: "addInvoice",
        component: AddInvoiceComponent,
        canActivate: [isAuthGuardGuard]
    },
    {
        path: "addInvoice",
        component: AddInvoiceComponent,
        canActivate: [isAuthGuardGuard]
    },
];
