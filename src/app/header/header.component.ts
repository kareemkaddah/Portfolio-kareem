import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [AboutComponent, RouterModule],
})
export class HeaderComponent {
  scrollToAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
}
