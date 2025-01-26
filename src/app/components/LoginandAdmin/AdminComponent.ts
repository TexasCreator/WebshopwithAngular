import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  product = { name: '', description: '', imageUrl: '', price: 0 };

  constructor(private http: HttpClient) {}

  addProduct() {
    this.http.post('/api/products', this.product).subscribe(response => {
      console.log('Product Added:', response);
    });
  }
}