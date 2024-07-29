import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/welcome/login/login.component';
import { SignupComponent } from './pages/welcome/signup/signup.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ExpensesComponent } from './pages/home/expenses/expenses.component';
import { ReportsComponent } from './pages/home/reports/reports.component';
import { ProfileComponent } from './pages/home/profile/profile.component';
import { InvoiceDetailsComponent } from './pages/home/invoice-details/invoice-details.component';
import { AddInvoiceComponent } from './pages/home/add-invoice/add-invoice.component';

export const routes: Routes = [
    {
        path: "",
        component: WelcomeComponent
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
        path: "home",
        component: HomeComponent
    },
    {
        path: "expenses",
        component: ExpensesComponent
    },
    {
        path: "reports",
        component: ReportsComponent
    },
    {
        path: "profile",
        component: ProfileComponent
    },
    {
        path: "editInvoice",
        component: InvoiceDetailsComponent
    },
    {
        path: "addInvoice",
        component: AddInvoiceComponent
    },
];
