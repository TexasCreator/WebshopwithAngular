import { Component, OnInit } from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [
    CurrencyPipe,
    NgIf,
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  ngOnInit() {
    this.loadCart();
  }

  loadCart(): void {
    this.cart = Object.values(localStorage).map((item) => JSON.parse(item));
  }

  removeFromCart(product: any): void {
    localStorage.removeItem(product.id);
    this.loadCart();
  }

  calculateTotal(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
