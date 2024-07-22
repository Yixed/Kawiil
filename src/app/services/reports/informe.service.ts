import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformeService {
  private apiUrl = 'http://localhost:3000/api/informes';

  constructor(private http: HttpClient) {}

  obtenerInformeVentas(filtros: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/ventas`, { params: filtros });
  }
}
