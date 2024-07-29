import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice.model';
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  url: string = 'https://backkawiilbd-1.onrender.com/invoice';
   constructor(private http: HttpClient) {}

   addInvoice() {
     return this.http.post(this.url);
   }

   getById(id: number) {
     return this.http.get(this.url + '/' + id);
   }
// Método para actualizar una factura
updateInvoice(invoice: Invoice): Observable<void> {
  return this.http.put<void>(`${this.url}/${invoice._id}`, invoice);
}
}
