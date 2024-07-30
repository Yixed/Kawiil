import { isAuthGuardGuard } from './../../guards/is-auth-guard.guard';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/commons/footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthService } from '../../services/auth.service';
import { NavBarComponent } from '../../components/commons/nav-bar/nav-bar.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    NavBarComponent,
    FooterComponent,
    AboutUsComponent,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {

}
