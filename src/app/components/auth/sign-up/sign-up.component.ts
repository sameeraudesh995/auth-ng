import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {Router, RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  Auth,
  AuthErrorCodes, createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup
} from '@angular/fire/auth';
import {MatIcon} from '@angular/material/icon';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    RouterLink,
    ReactiveFormsModule,
    MatIcon,
    MatProgressSpinner,
    NgIf
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  authForm!: FormGroup;

  //init the google auth provider
  googleAuthProvider = new GoogleAuthProvider();

  //auth instance
  auth= inject(Auth);

  isSubmissionInProgress: boolean = false;

  errorMessage: string= '';

  constructor(private router: Router) {
    this.initForm();
  }
  initForm() {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    if (this.authForm.invalid)
      return;

    this.isSubmissionInProgress = true;

    createUserWithEmailAndPassword(this.auth, this.authForm.value.email, this.authForm.value.password)
      .then((response) => {
        this.redirectToDashboardPage();
      })
      .catch((error) => {
        this.isSubmissionInProgress = false;
        console.error('error', error);
        if(error instanceof Error) {
          if(error.message.includes(AuthErrorCodes.INVALID_EMAIL)) {
            this.errorMessage = 'Email is not valid';
          }
          else if(error.message.includes('auth/invalid-credential')) {
            this.errorMessage = 'invalid Email/Password';
          }
          else if(error.message.includes(AuthErrorCodes.WEAK_PASSWORD)) {
            this.errorMessage = 'Please enter Strong Password';
          }
          else if(error.message.includes(AuthErrorCodes.EMAIL_EXISTS)) {
            this.errorMessage = 'This email is already in use for another account';
          }
          else {
            this.errorMessage = 'Something went wrong Please try again';
          }
        }
      })
  }

  onSignInWithGoogle() {
    signInWithPopup(this.auth, this.googleAuthProvider)
      .then((response) => {
        this.redirectToDashboardPage();
      })
      .catch((error) => {
        this.errorMessage='Something went wrong Please try again';
      })
  }

  redirectToDashboardPage() {
    this.router.navigate(['/dashboard']);
  }
}
