import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { WelcomeNavBarComponent } from "../../../components/commons/welcome-nav-bar/welcome-nav-bar.component";
import { FooterComponent } from "../../../components/commons/footer/footer.component";
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, WelcomeNavBarComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  form!: FormGroup

  constructor(private builder: FormBuilder, 
              private authService: AuthService,
              private router: Router){
   this.form = builder.group({
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required]), 
    email: new FormControl(null, [Validators.required, Validators.email]),
    pwd: new FormControl(null, [Validators.required,Validators.minLength(8), Validators.maxLength(15), Validators.pattern(/[A-Za-z\d$@$!%*?&]/), ]),
   }) 
  }

  signup() {
    console.log(this.form.value)
    this.authService.signup(this.form.value.name, this.form.value.surname,this.form.value.email, this.form.value.pwd).subscribe({
      next: () => {
        this.router.navigateByUrl("/login")
      },
      error: () =>{
        alert ("Rellena todo el formulario")
      }      
    })
    
  }

}
