import { Component, OnInit } from '@angular/core';
import { BillService } from '../../services/bill.service';
import { Bill } from '../../interfaces/bill';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-factura-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './factura-detail.component.html',
  styleUrl: './factura-detail.component.css',
})
export class FacturaDetailComponent implements OnInit {
  isLoading: boolean = true;
  factura: Bill | null = null;

  ngOnInit() {
    this.cargarFactura();
  }
  constructor(private facturaService: BillService) {
    this.facturaService.getFacturas().subscribe((factura: Bill) => {
      this.factura = factura;
      this.isLoading = false;
    });
  }

  cargarFactura() {
    (error :any) => {
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
