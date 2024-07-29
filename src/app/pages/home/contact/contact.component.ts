import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../../../components/commons/nav-bar/nav-bar.component';

@Component({
  selector: 'app- Contact',
  standalone: true,
  imports: [RouterModule, NavBarComponent],
  templateUrl: './contact.component.css',
  styleUrl: './contact.component.css'
})

export class  ContactComponent
/*implements OnInit {
  ventas: any;

  constructor(private contactService:  ContactService) {}
/*
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
