import { Component } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../../../components/commons/nav-bar/nav-bar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, NavBarComponent], //
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private contactService: ContactService) {}
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
