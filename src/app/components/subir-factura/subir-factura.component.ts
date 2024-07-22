import { Component } from '@angular/core';
import { FacturaService } from '../../services/invoices/factura.service';

@Component({
  selector: 'app-subir-factura',
  templateUrl: './subir-factura.component.html',
  styleUrls: ['./subir-factura.component.css']
})
export class SubirFacturaComponent {
  constructor(private facturaService: FacturaService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('archivo', file);

    this.facturaService.subirFactura(formData).subscribe(response => {
      console.log('Factura subida:', response);
    });
  }
}
