import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentGuard implements CanActivate {

  constructor(private cartService: CartService, private router: Router) {}

  canActivate(): boolean {
    const cartItems = this.cartService.getCart();

    if (cartItems.length === 0) {
      alert('Ihr Warenkorb ist leer. Sie können die Zahlungsseite nicht aufrufen.');
      this.router.navigate(['/shop']);
      return false;
    }

    return true;
  }
}
