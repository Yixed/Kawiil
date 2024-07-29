import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  url: string = 'https://backkawiilbd-1.onrender.com/invoice';
   constructor(private http: HttpClient) {}
 
   addInvoice() {
     return this.http.get(this.url);
   }
 
   getById(id: number) {
     return this.http.get(this.url + '/' + id);
   }

}

