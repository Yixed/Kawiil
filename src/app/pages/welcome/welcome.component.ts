import { isAuthGuardGuard } from './../../guards/is-auth-guard.guard';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router, RouterOutlet } from '@angular/router';
import { WelcomeNavBarComponent } from '../../components/commons/welcome-nav-bar/welcome-nav-bar.component';
import { FooterComponent } from '../../components/commons/footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    WelcomeNavBarComponent,
    FooterComponent,
    AboutUsComponent,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {

}
