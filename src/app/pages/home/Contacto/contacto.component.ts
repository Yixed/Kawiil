import { Component, OnInit } from '@angular/core';
import { ReportComponent } from '../Contacto/contacto.component.spec';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../../../components/commons/nav-bar/nav-bar.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RouterModule, NavBarComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})/*
export class ReportsComponent
 implements OnInit {
  ventas: any;

  constructor(private reportService: ContactoService) {}

  ngOnInit() {
    this.obtenerInformeVentas();
  }

  obtenerInformeVentas() {
    const filtros = { year: 2024 };
     FALTA REPORT SERVICE############################################
    this.reportService.FALTA(filtros).subscribe(response => {
      this.ventas = response;
    });
  }
}*/
