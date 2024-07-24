import { Factura } from './../interfaces/factura';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FacturaService } from '../factura.service';

@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit {
  factura: Factura | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private facturaService: FacturaService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const facturaId = this.route.snapshot.paramMap.get('id');
    if (facturaId) {
      this.cargarFactura(facturaId);
    }
  }

  cargarFactura(id: string): void {
    this.facturaService.getFacturas(id).subscribe({
      next: (data) => {
        this.factura = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar la factura:', error);
        this.isLoading = false;
      }
    });
  }

  volver(): void {
    this.router.navigate(['/facturas']);
  }
}
