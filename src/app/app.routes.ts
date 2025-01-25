import { Routes } from '@angular/router';
import { LandingpageComponent } from './components/landing-page/landingpage.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';

export const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard-Redirect
];
