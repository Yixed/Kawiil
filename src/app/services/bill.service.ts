import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private apiUrl = 'http://localhost:3000/api/facturas';

  constructor(private http: HttpClient) {}

  subirFactura(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/subir`, formData);
  }

  obtenerFacturas(filtros: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/obtener`, { params: filtros });
  }
}
