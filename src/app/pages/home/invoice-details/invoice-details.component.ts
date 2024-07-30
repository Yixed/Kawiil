import { Invoice } from './../../../interfaces/invoice';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { InvoiceService } from '../../../services/invoice.service';
import { NavBarComponent } from '../../../components/commons/nav-bar/nav-bar.component';

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [ReactiveFormsModule, NavBarComponent, RouterModule],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.css',
})
export class InvoiceDetailsComponent {
  parametro: string | null = null;
  invoice: Invoice | null = null;
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private builder: FormBuilder
  ) {
    //Hacemos peticion para obtener los datos de la factura. Se necesita ID
    route.paramMap.subscribe((param) => {
      this.parametro = param.get('id');
    });

    invoiceService.getById(this.parametro).subscribe({
      next: (response) => {
        this.invoice = response as Invoice;
        this.createForm(builder);
      },
      error: () => {},
    });
  }

  createForm(builder: FormBuilder) {
    this.form = builder.group({
      company: new FormControl(this.invoice?.company, []),
      creationDate: new FormControl(this.invoice?.creationDate, []),
      name: new FormControl(this.invoice?.name, []),
      description: new FormControl(this.invoice?.description, []),
      amount: new FormControl(this.invoice?.amount, []),
      file: new FormControl(this.invoice?.file),
    });
  }

  updateInvoicebtn() {
    console.log('actualizar factura en base de datos: ', this.form.value);

    const body = {
      id: this.invoice?._id,
      company: this.form.value.company,
      creationDate: this.form.value.creationDate,
      name: this.form.value.name,
      description: this.form.value.description,
      amount: this.form.value.amount,
      file: this.form.value.file,
    };

    if (this.invoice !== null) {
      this.invoiceService.updateInvoice(this.invoice._id, body).subscribe({
        next: () => {},
        error: () => {
          alert('error');
        },
      });
    }
  }
}
