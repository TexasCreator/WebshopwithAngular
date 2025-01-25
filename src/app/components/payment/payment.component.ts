import { Component } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  imports: [
    CurrencyPipe
  ],
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  calculateTotal(): number {
    const cart = Object.values(localStorage).map((item) => JSON.parse(item));
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  processPayment(): void {
    alert('Payment successful! Thank you for your purchase.');
    localStorage.clear();
  }
}
