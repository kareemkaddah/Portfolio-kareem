import { Component } from '@angular/core';
import {
  RouterModule,
  RouterLink,
  RouterOutlet,
  Router,
} from '@angular/router';
import { ImpressumComponent } from '../impressum/impressum.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [AboutComponent, RouterModule, RouterLink, RouterOutlet],
})
export class HeaderComponent {
  scrollToAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
  constructor(private router: Router) {}
  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
