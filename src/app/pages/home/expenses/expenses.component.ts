import { Router, RouterModule } from '@angular/router';
import { Component, NgZone } from '@angular/core';
import { NavBarComponent } from '../../../components/commons/nav-bar/nav-bar.component';
import { Invoice } from '../../../interfaces/invoice';
import { AuthService } from '../../../services/auth.service';
import { InvoiceService } from '../../../services/invoice.service';


@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [NavBarComponent, NavBarComponent, RouterModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent {
  invoiceList: Invoice[] = [];
  responseInvoices: Object = {}
  
  
  constructor(private authService: AuthService, private invoiceService: InvoiceService, private router: Router) {

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


  deleteInvoice(invoiceId: String){
    console.log("deleteId: ", invoiceId)
    this.invoiceService.deleteInvoice(invoiceId).subscribe({
      next: (res) => {     
        console.log("Delete response: ", res)
        
        //Navegamos a la misma ruta para actualizar la tabla
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/expenses']);
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
