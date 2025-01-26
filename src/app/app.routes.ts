import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' }, // Startseite leitet zu Shop um
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '**', redirectTo: '/shop' } // Fallback für ungültige Routen
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
