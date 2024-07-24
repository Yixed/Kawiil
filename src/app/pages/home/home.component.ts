import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
