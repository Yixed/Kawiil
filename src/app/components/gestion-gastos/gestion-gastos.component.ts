import { Component, inject, OnInit } from '@angular/core';
import { GastoService } from '../../services/spent/gasto.service';

@Component({
  selector: 'app-gestion-gastos',
  standalone: true,
  templateUrl: './gestion-gastos.component.html',
  styleUrl: './gestion-gastos.component.css'
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
