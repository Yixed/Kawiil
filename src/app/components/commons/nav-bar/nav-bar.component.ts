import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

logged : Boolean = false

  constructor( private authService: AuthService, private router: Router){
    
    if (authService.loginResponse){
      this.logged = true
    } else {
      this.logged = false
    }
  }



  logout(){
    this.authService.logout();
    this.router.navigate(["/"])
  }
}
