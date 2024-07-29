import { Invoice } from './../../../interfaces/invoice';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { InvoiceService } from '../../../services/invoice.service';
import { NavBarComponent } from "../../../components/commons/nav-bar/nav-bar.component";

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [ReactiveFormsModule, NavBarComponent, RouterModule],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.css'
})
export class InvoiceDetailsComponent {

    parametro: string|null = null
    invoice: Invoice|null = null
    form!: FormGroup 
  
    constructor(private route: ActivatedRoute,
      private invoiceService: InvoiceService,
      private builder: FormBuilder){


  //Hacemos peticion para obtener los datos de la factura. Se necesita ID
      route.paramMap.subscribe(param=>{
        this.parametro = param.get("id")
      })
  
      if(this.parametro === "nuevo"){
        this.invoice = {
          _id: "",
          company:"", 
          creationDate:"",
          name:"",
          description:"",
          amount: 0,
          file:""
        }
        this.createForm(builder)
      }
      else{
        invoiceService.getById(Number(this.parametro)).subscribe({
          next: (response)=>{
            this.invoice = response as Invoice
            this.createForm(builder)
          },
          error: ()=>{}
        })
      }
    }
  
    createForm(builder: FormBuilder){
      if(this.invoice){
        this.form = builder.group({
          "company": new FormControl(this.invoice.company, []) , 
          "creationDate": new FormControl(this.invoice.creationDate, []) , 
          "name": new FormControl(this.invoice.name, []), 
          "description":new FormControl(this.invoice.description, []) , 
          "amount": new FormControl(this.invoice.amount, []), 
           "file": new FormControl(this.invoice.file), 
        })
      }
      
    }
  }
