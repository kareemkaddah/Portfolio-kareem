import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [AboutComponent, RouterModule, FooterComponent],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  scrollToAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
