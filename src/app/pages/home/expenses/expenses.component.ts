import { RouterModule } from '@angular/router';
import { InvoiceService } from './../../../services/invoice.service';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../../components/commons/nav-bar/nav-bar.component';
import { WelcomeNavBarComponent } from '../../../components/commons/welcome-nav-bar/welcome-nav-bar.component';
import { Invoice } from '../../../interfaces/invoice';


@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [NavBarComponent, WelcomeNavBarComponent, RouterModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent {
  invoicesList = [
    {
      company: 'TECPESA',
    },
    {
      company: 'FEFE',
    },
  ];
  bills: Invoice[] = [];

  // constructor(private invoiceService: InvoiceService) {
  //   invoiceService.addInvoice().subscribe({
  //     next: (res) => {
  //       this.bills = res as Invoice[];
  //       console.log('finalizado con exito', this.bills);
  //     },
  //     error: () => {
  //       console.log('error');
  //     },
  //   });
  // }

}
