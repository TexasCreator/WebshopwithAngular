import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/auth/login'; // Backend URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Sends login data to backend
    const loginData = { username, password };
    return this.http.post<any>(this.apiUrl, loginData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
