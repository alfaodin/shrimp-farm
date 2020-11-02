import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.loginEmailPassword(email, password)
        .subscribe(() => {
          this.router.navigate(['/admin']);
        },
          error => this.setErrorMessage(error)
        );
    }
  }

  private setErrorMessage(error: any): void {
    console.error(error);
    switch (error.code) {
      case 'auth/wrong-password':
        this.errorMessage = 'La contraseña es incorrecta';
        break;
      case 'auth/user-not-found':
        this.errorMessage = 'Correo eléctronico es incorrecto';
        break;
      default:
        this.errorMessage = 'Ha ocurrido un error inesperado';
        break;
    }
  }
}
