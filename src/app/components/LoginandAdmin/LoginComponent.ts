import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient) {}

  login() {
    this.http.post('/api/login', {
      username: this.username,
      password: this.password,
    }).subscribe(response => {
      console.log(response);
    });
  }
}