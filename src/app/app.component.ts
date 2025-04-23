import { Component, HostListener } from '@angular/core';

import { trigger, transition, style, animate } from '@angular/animations';
import { HeaderComponent } from './header/header.component';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, RouterModule, RouterOutlet, CommonModule],
  animations: [
    trigger('sideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-30px)' }), // Fixed typo
        animate(
          '800ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }) // Fixed typo
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  showList = false;
  isScrolled = false;
  mouseX = 0;
  mouseY = 0;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
