import { Component, OnInit } from '@angular/core';
import { BillService } from '../../services/bill.service';
import { Bill } from '../../interfaces/bill';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-factura-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './factura-detail.component.html',
  styleUrl: './factura-detail.component.css',
})
export class FacturaDetailComponent implements OnInit {
  isLoading: boolean = true;
  factura: Bill | null = null;
  filtro: string = '';
  facturasFiltradas: Bill[] = [];

  constructor(private facturaService: BillService) {}

  ngOnInit() {
    this.cargarFacturas();
  }

  cargarFacturas() {
    this.facturaService.getFacturas().subscribe(
      (facturas: Bill[]) => {
        this.facturasFiltradas = facturas;
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error al cargar las facturas:', error);
        this.isLoading = false;
      }
    );
  }

  aplicarFiltro() {
    if (!this.filtro) {
      this.cargarFacturas();
    } else {
      this.facturasFiltradas = this.facturasFiltradas.filter(factura =>
        factura.nombre.toLowerCase().includes(this.filtro.toLowerCase())
      );
    }
  }

  subirFactura(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('factura', file);

      this.facturaService.subirFactura(formData).subscribe(
        (response) => {
          console.log('Factura subida con éxito', response);
          this.cargarFacturas(); // Recargar la lista de facturas
        },
        (error) => {
          console.error('Error al subir la factura:', error);
        }
      );
    }
  }

  editarFactura(id: number) {
    console.log('Editando factura:', id);
  }

  volver() {
    console.log('Volviendo a la lista de facturas');
  }
}
