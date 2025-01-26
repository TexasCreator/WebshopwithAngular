import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  standalone: false,
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  message = 'Vielen Dank für Ihre Bestellung! Die Bezahlung war erfolgreich.';
}
