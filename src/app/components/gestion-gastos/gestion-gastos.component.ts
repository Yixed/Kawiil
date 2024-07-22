import { Component, OnInit } from '@angular/core';
import { GastoService } from '../services/gasto.service';

@Component({
  selector: 'app-gestion-gastos',
  templateUrl: './gestion-gastos.component.html',
  styleUrls: ['./gestion-gastos.component.css']
})
export class GestionGastosComponent implements OnInit {
  gastos: any[] = [];

  constructor(private gastoService: GastoService) {}

  ngOnInit() {
    this.obtenerGastos();
  }

  obtenerGastos() {
    this.gastoService.obtenerGastos('usuarioIdEjemplo').subscribe(response => {
      this.gastos = response;
    });
  }

  crearGasto() {
    const nuevoGasto = {
      usuarioId: 'usuarioIdEjemplo',
      descripcion: 'Descripción del gasto',
      monto: 100,
      fecha: new Date(),
      estadoFactura: 'pendiente'
    };

    this.gastoService.crearGasto(nuevoGasto).subscribe(response => {
      this.obtenerGastos();
    });
  }
}
