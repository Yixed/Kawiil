import { AuthService } from './../../../services/auth.service';
import { Invoice } from './../../../interfaces/invoice';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NavBarComponent } from '../../../components/commons/nav-bar/nav-bar.component';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { InvoiceService } from '../../../services/invoice.service';

@Component({
  selector: 'app-add-invoice',
  standalone: true,
  imports: [ReactiveFormsModule, NavBarComponent, RouterModule],
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.css',
})
export class AddInvoiceComponent {
  parametro: string | null = null;
  addinvoice: Invoice | null = null;
  form!: FormGroup;
  responseInvoice: Object = {}
  userId: string|undefined = this.authService.loginResponse?.user._id
  invoiceId: String|undefined = this.invoiceService.invoiceResponse?._id

  constructor(private builder: FormBuilder, 
    private invoiceService: InvoiceService,
    private authService: AuthService,
    private router: Router) 
    {
    this.form = builder.group({
      company: new FormControl(null, []),
      creationDate: new FormControl(null, []),
      name: new FormControl(null, []),
      description: new FormControl(null, []),
      amount: new FormControl(null, []),
      file: new FormControl("", []),
     }) 
  }

   

  addinvoicebtn() {
    console.log(this.form.value)
    this.invoiceService.addInvoice(this.form.value.company, this.form.value.creationDate, this.form.value.name, this.form.value.description, this.form.value.amount, this.form.value.file).subscribe({
      next: (res) => {

        //se guarda el valor de la factura en invoiceServie
        this.invoiceService.saveInvoice(res as Invoice);
        //guardo el id de la factura en este doc
        this.invoiceId = this.invoiceService.invoiceResponse?._id
        
        //Una vez se registra la factura(post), se asigna la factura al usuario(put)
        this.asignInvoice()
      },
      error: () =>{
        alert ("Rellena todo el formulario")
      }      
    })
    
  }

  asignInvoice() {

    this.authService.asignInvoice( this.userId, this.invoiceId).subscribe({
      next: (res) => {
        console.log("asignar funciona: ", res)
        this.router.navigate(['/expenses']);
      },
      error: (error) =>{
        console.log("asignar no ha funcionado", error)
      }      
    })
    
  }
}
