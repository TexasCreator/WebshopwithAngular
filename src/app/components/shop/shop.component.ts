import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  standalone: false,
  styleUrls: ['./shop.component.css']
})

export class ShopComponent {
  products = [
    { id: 1, name: 'Produkt 1', description: 'Ein tolles Produkt', price: 10.99 },
    { id: 2, name: 'Produkt 2', description: 'Ein weiteres tolles Produkt', price: 19.99 },
    { id: 3, name: 'Produkt 3', description: 'Was für ein Angebot!', price: 5.49 }
  ];
  isLoggedIn = false;
  constructor(private cartService: CartService) {
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  }

  addToCart(product: any) {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
      alert('Bitte loggen Sie sich ein, um Produkte in den Warenkorb zu legen!');
      return;
    }

    this.cartService.addToCart(product);
    alert(`${product.name} wurde zum Warenkorb hinzugefügt!`);
  }
}
