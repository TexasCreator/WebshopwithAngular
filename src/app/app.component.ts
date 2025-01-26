import {Component, PipeTransform} from '@angular/core';
import { AppConfig } from './app.config';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    RouterLink
  ]
})
export class AppComponent {
  title = AppConfig.appTitle;
}
