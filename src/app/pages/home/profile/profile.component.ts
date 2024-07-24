import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../../../components/commons/nav-bar/nav-bar.component';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, NavBarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
