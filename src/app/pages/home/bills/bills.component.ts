import { Component } from '@angular/core';
import { BillService } from '../../../services/bill.service';
import { NavBarComponent } from "../../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent {
  
  constructor(private billService: BillService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('archivo', file);

    this.billService.subirFactura(formData).subscribe(response => {
      console.log('Factura subida:', response);
    });
  }
}
