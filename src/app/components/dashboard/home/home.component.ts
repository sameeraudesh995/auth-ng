import {Component, inject, OnInit} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {Auth, signOut, User} from '@angular/fire/auth';
import {TodosComponent} from '../todos/todos.component';
import {NgForOf} from '@angular/common';
import {TodosService} from '../../../services/todos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatToolbar,
    MatButton,
    TodosComponent,
    RouterOutlet,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
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
