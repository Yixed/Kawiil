import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WelcomeNavBarComponent } from "../../../components/commons/welcome-nav-bar/welcome-nav-bar.component";
import { FooterComponent } from "../../../components/commons/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterModule , ReactiveFormsModule, WelcomeNavBarComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      pass: new FormControl(null, [Validators.required]),
    });
  }

  submitForm() {
    console.log(this.form.value);
  }


}
