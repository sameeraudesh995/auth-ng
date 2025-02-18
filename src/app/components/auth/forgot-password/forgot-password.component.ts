import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Router, RouterLink} from '@angular/router';
import {Auth, sendPasswordResetEmail} from '@angular/fire/auth';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    RouterLink,
    ReactiveFormsModule,
    NgIf,
    MatProgressSpinner,
    MatIcon
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  //inject the auth service
  auth = inject(Auth);

  router =inject(Router);
  form!: FormGroup;

  errorMassage: string = '';
  isSubmissionProgress: boolean = false;
  isPasswordResetEmailSent: boolean = false;

  constructor() {
    this.initForm();
  }
    initForm() {
     this.form = new FormGroup({
       email: new FormControl('', Validators.required),
     })
  }

  onSubmit() {
    if(this.form.invalid)
      return;

    this.isSubmissionProgress = true;
    //reset the password by sending a reset password link

    sendPasswordResetEmail(this.auth, this.form.value.email)
    .then((response) => {
      this.isPasswordResetEmailSent = true;
      this.isSubmissionProgress = false;

    }).catch((error) => {
      this.isSubmissionProgress = false;
      this.errorMassage = 'An error occurred. Please try again';
    })
  }
}
