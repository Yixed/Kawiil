import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FooterComponent } from '../../../components/commons/footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoginResponse } from '../../../interfaces/login-response';
import { NavBarComponent } from '../../../components/commons/nav-bar/nav-bar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    NavBarComponent,
    FooterComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  passwordType: string = 'password';
  form!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  changePasswordSight(pass_: String) {
    this.passwordType = pass_ === 'text' ? 'password' : 'text';
  }

  submitLogin() {
    //Se hace la petición de login configurada en authService
    this.authService
      .login(this.form.value.email, this.form.value.password)
      .subscribe({
        next: (response) => {
          this.authService.saveUser(response as LoginResponse);
          this.router.navigate(['/home']);
        },
        error: () => {
          console.log('error on login');
        },
      });
  }

}
