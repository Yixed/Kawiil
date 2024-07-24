import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../services/report.service';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../../../components/commons/nav-bar/nav-bar.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [RouterModule, NavBarComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {
  ventas: any;

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.obtenerInformeVentas();
  }

  obtenerInformeVentas() {
    const filtros = { year: 2024 };
    /* FALTA REPORT SERVICE############################################
    this.reportService.FALTA(filtros).subscribe(response => {
      this.ventas = response;
    });*/
  }
}
