import { Component, OnInit } from '@angular/core';
import { BillService } from '../../services/bill.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-factura-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './factura-list.component.html'
})
export class FacturaListComponent implements OnInit {

  facturas: any[] = [];

  constructor(private facturaService: BillService) { }

  ngOnInit() {
    this.obtenerFacturas({});
  }

  obtenerFacturas(filtros: any) {
    this.facturaService.getFacturas().subscribe(data => {
      this.facturas = data;
    });
  }

  aplicarFiltro() {
    const filtros = { año: 2024, mes: 7 };
    this.obtenerFacturas(filtros);
  }
}
