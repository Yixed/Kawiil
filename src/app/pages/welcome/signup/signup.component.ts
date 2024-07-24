import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeNavBarComponent } from "../../../components/welcome-nav-bar/welcome-nav-bar.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, WelcomeNavBarComponent, FooterComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
