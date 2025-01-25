import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  template: `
    <div class="landing">
      <h1>Willkommen zu unserem Webshop!</h1>
      <p>Finden Sie die besten Angebote und Produkte!</p>
      <a routerLink="/shop" class="btn">Zum Shop</a>
    </div>
  `,
  styles: [`
    .landing {
      text-align: center;
      margin-top: 50px;
    }
    .btn {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
      text-decoration: none;
    }
    .btn:hover {
      background-color: #0056b3;
    }
  `]
})
export class LandingpageComponent {}
