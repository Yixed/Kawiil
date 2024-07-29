import { Component } from '@angular/core';
import { FooterComponent } from "../../components/commons/footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { NavBarComponent } from '../../components/commons/nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 footerBg: string = "#f8f9fa";

}
