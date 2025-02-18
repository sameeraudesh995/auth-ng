import { Component, inject} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {ActivatedRoute, Router} from '@angular/router';
import {Auth, signOut, User} from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatToolbar,
    MatButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 private activatedRoute = inject(ActivatedRoute);
 private route = inject(Router);

 //get the user from the route (which is injected by the userResolver)
  user: User = this.activatedRoute.snapshot.data['user'];

  //get the auth service
  auth = inject(Auth);

  constructor() {
    console.log('Logged in user: ', this.user);
  }

  onSignOut(): void {
    signOut(this.auth).then((response) => {
      this.route.navigate(['/auth/sign-in']);
    }).catch((error) => {
      console.log('error occurred :', error);
    })
  }
}
