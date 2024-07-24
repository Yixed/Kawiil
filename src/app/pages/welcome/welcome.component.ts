import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterOutlet } from '@angular/router';
import { WelcomeNavBarComponent } from '../../components/welcome-nav-bar/welcome-nav-bar.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { AboutUsComponent } from "./about-us/about-us.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, WelcomeNavBarComponent, FooterComponent, AboutUsComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
