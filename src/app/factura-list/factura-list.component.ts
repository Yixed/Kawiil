import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../factura.service';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html'
})
export class FacturaListComponent implements OnInit {

  facturas: any[] = [];

  constructor(private facturaService: FacturaService) { }

  ngOnInit() {
    this.obtenerFacturas({});
  }

  obtenerFacturas(filtros: any) {
    this.facturaService.getFacturas(filtros).subscribe(data => {
      this.facturas = data;
    });
  }

  aplicarFiltro() {
    const filtros = { año: 2024, mes: 7 };
    this.obtenerFacturas(filtros);
  }
}
