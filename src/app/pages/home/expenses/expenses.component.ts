import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../../components/commons/nav-bar/nav-bar.component';
import { Invoice } from '../../../interfaces/invoice';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [NavBarComponent, NavBarComponent, RouterModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent {
  // invoicesList = [
  //   {
  //     company: 'TECPESA',
  //   },
  //   {
  //     company: 'FEFE',
  //   },
  // ];
  invoiceList: Invoice[] = [];
  responseInvoices: Object = {}
  
  
  constructor(private authService: AuthService) {

    const userId: string|undefined = authService.loginResponse?.user._id

    authService.getUserInvoices(userId).subscribe({
      next: (res) => {
        console.log("respuesta: ", res)
        this.invoiceList = res as Invoice[]
        console.log("Respuesta final: ", this.invoiceList)
      },
      error: () => {
        console.log('error');
      },
    });
  }

}
