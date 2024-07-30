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

  constructor(
    private builder: FormBuilder,
    private invoiceService: InvoiceService,
    private router: Router
  ) {
    this.form = builder.group({
      company: new FormControl(null, []),
      creationDate: new FormControl(null, []),
      name: new FormControl(null, []),
      description: new FormControl(null, []),
      amount: new FormControl(null, []),
      file: new FormControl(null, []),
    });
  }

  addinvoicebtn() {
    console.log(this.form.value);
    this.invoiceService
      .addInvoice(
        this.form.value.company,
        this.form.value.creationDate,
        this.form.value.name,
        this.form.value.description,
        this.form.value.amount,
        this.form.value.file
      )
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/expenses');
        },
        error: () => {
          alert('Rellena todo el formulario');
        },
      });
  }
}
