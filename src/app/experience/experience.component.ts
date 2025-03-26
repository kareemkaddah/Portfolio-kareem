import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-experience',
  imports: [],
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  animations: [
    trigger('fadeLeftIn', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
          filter: 'blur(10px)',
        }), // Start off-screen (left)
        animate(
          '1000ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)', filter: 'blur(0)' })
        ), // Animate to visible position
      ]),
    ]),
  ],
})
export class ExperienceComponent {
  @Input() companyName: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() duration: string = '';
  @Input() website: string = '';
  openWebsite(): void {
    if (this.website) {
      window.open(this.website, '_blank'); // Opens the link in a new tab
    }
  }
}
