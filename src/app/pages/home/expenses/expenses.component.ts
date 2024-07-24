import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../../services/expense.service';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../../../components/commons/nav-bar/nav-bar.component';
import { FacturaListComponent } from '../../../components/factura-list/factura-list.component';
import { FacturaDetailComponent } from '../../../components/factura-detail/factura-detail.component';
import { UploadComponent } from '../../../components/upload/upload.component';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [RouterModule, NavBarComponent, FacturaListComponent, FacturaDetailComponent, UploadComponent],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent implements OnInit {
  gastos: any[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    this.obtenerGastos();
  }

  obtenerGastos() {
    this.expenseService.obtenerGastos('usuarioIdEjemplo').subscribe(response => {
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

    this.expenseService.crearGasto(nuevoGasto).subscribe(response => {
      this.obtenerGastos();
    });
  }
}
