import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    // Alle Komponenten, die in diesem Modul Teil der Webshop-Logik sind, werden hier hinzugefügt.
    ShopComponent,
    CartComponent,
    PaymentComponent,
  ],
  imports: [
    // Importieren der notwendigen Module für die Funktionalitäten
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppComponent,

    // Unterstützt erforderlich für Formulare
  ],
  providers: [],
  bootstrap: [AppComponent] // Die Hauptkomponente, die gestartet wird
})
export class AppModule { }


