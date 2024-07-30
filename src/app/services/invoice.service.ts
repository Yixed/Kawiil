import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../interfaces/invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  url: string = 'https://backkawiilbd-1.onrender.com/invoice';
  invoiceResponse: Invoice | null = null

  constructor(private http: HttpClient) {}

  addInvoice(
    company: String,
    creationDate: Date,
    name: String,
    description: String,
    amount: number,
    file: String
  ) {
    return this.http.post(`${this.url}/addInvoice`, {
      company: company,
      creationDate: creationDate,
      name: name,
      description: description,
      amount: amount,
      file: file,
    });
  }

  getById(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  //Guardar datos del usuario
  saveInvoice(invoiceResponse: Invoice) {
    
    //se guarda en local
    this.invoiceResponse = invoiceResponse;
  }

  
}
