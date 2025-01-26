import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">
      <h1>Login</h1>
      <form (submit)="onLogin()">
        <label for="username">Benutzername</label>
        <input id="username" type="text" [(ngModel)]="username" required/>

        <label for="password">Passwort</label>
        <input id="password" type="password" [(ngModel)]="password" required/>

        <button type="submit">Einloggen</button>
      </form>
      <p *ngIf="errorMessage" class="error-msg">{{ errorMessage }}</p>
    </div>
  `,

  imports: [
    FormsModule,
    NgIf
  ],
  styles: [`
    .login-container {
      text-align: center;
      width: 300px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    label {
      display: block;
      margin-top: 10px;
      text-align: left;
    }

    input {
      width: 100%;
      padding: 5px;
      margin-top: 5px;
    }

    button {
      margin-top: 20px;
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .error-msg {
      color: red;
      margin-top: 10px;
    }
  `]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private router: Router, private loginService: LoginService) {}

  onLogin() {
    this.loginService.login(this.username, this.password).subscribe({
      next: (response) => {
        if (response.success) {
          sessionStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/shop']);
        } else {
          this.errorMessage = response.message;
        }
      },
      error: () => {
        this.errorMessage = 'Login fehlgeschlagen. Bitte versuchen Sie es erneut.';
      },
    });
  }
}
