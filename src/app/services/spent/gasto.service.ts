import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private apiUrl = 'http://localhost:3000/api/gastos';

  constructor(private http: HttpClient) {}

  crearGasto(gasto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, gasto);
  }

  obtenerGastos(usuarioId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/obtener`, { params: { usuarioId } });
  }
}
