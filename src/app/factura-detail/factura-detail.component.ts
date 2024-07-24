import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../services/factura.service';

interface Factura {
  id: number;
  numero: string;
  fecha: Date;
  empresa: string;
  estado: string;
  importe: number;
  descripcion?: string;
}

@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css'],
})
export class FacturaDetailComponent implements OnInit {
  isLoading: boolean = true;
  factura: Factura | null = null;

  ngOnInit() {
    this.cargarFactura();
  }
  constructor(private facturaService: FacturaService) {
    this.facturaService.getFacturas().subscribe((factura: Factura) => {
      this.factura = factura;
      this.isLoading = false;
    });
  }

  cargarFactura() {
    (error) => {
      console.error('Error al cargar la factura:', error);
      this.isLoading = false;
    };
  }

  editarFactura(id: number) {
    console.log('Editando factura:', id);
  }

  volver() {
    console.log('Volviendo a la lista de facturas');
  }
}
