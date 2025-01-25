import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CurrencyPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-shop',
  template: `
    <h1>Produkte</h1>
    <div *ngIf="products && products.length > 0; else noProducts">
      <div *ngFor="let product of products" class="product-card">
        <img ngSrc="product.image" alt="{{product.name}}"/>
        <h2>{{ product.name }}</h2>
        <p>{{ product.price | currency }}</p>
        <button (click)="addToCart(product)">In den Warenkorb</button>
      </div>
    </div>
    <ng-template #noProducts><p>Keine Produkte verfügbar.</p></ng-template>
  `,
  imports: [
    CurrencyPipe,
    NgIf,
    NgForOf,
    NgOptimizedImage
  ],
  styles: [`
    .product-card {
      border: 1px solid #ccc;
      margin: 10px;
      padding: 10px;
      display: inline-block;
      width: 200px;
      text-align: center;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  `]
})
export class ShopComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<Product[]>('/api/products').subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: Product) {
    console.log(`Produkt hinzugefügt: ${product.name}`);
  }
}
