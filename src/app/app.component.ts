import {Component} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf
  ]
})
export class AppComponent {
  title = 'WebshopwithAngular';
  isLoggedIn = false;

  constructor(private router: Router) {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  }

  onLogout() {
    sessionStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
    alert('Sie wurden ausgeloggt.');
    this.router.navigate(['/login']);
  }
}

