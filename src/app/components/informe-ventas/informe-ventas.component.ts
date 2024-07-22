import { Component, OnInit } from '@angular/core';
import { InformeService } from '../services/informe.service';

@Component({
  selector: 'app-informe-ventas',
  templateUrl: './informe-ventas.component.html',
  styleUrls: ['./informe-ventas.component.css']
})
export class InformeVentasComponent implements OnInit {
  ventas: any;

  constructor(private informeService: InformeService) {}

  ngOnInit() {
    this.obtenerInformeVentas();
  }

  obtenerInformeVentas() {
    const filtros = { year: 2024 };
    this.informeService.obtenerInformeVentas(filtros).subscribe(response => {
      this.ventas = response;
    });
  }
}
