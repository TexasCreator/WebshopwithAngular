import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: false,
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: any[] = [];

  constructor(private cartService: CartService, private router: Router) {
    this.cart = this.cartService.getCart(); // Hole Warenkorb-Daten aus dem CartService
  }

  clearCart() {
    this.cartService.clearCart();
    this.cart = [];
    alert('Der Warenkorb wurde geleert.');
  }

  proceedToPayment() {
    if (this.cart.length === 0) {
      alert('Ihr Warenkorb ist leer. Fügen Sie bitte Produkte hinzu, bevor Sie fortfahren.');
      return;
    }
    this.router.navigate(['/payment']); // Navigiere zur Zahlungsseite
  }

}
