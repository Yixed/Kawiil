import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private apiUrl = 'http://localhost:3000/facturas';

  constructor(private http: HttpClient) { }

  getFacturas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?`);
  }
  cargarFactura(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?`);
  }
  crearFactura(factura: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, factura);
  }
}
