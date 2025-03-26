import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-skill-box',
  imports: [],
  templateUrl: './skill-box.component.html',
  styleUrl: './skill-box.component.css',
  animations: [
    trigger('fadeLeftIn', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-50px)',
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
export class SkillBoxComponent {
  @Input() skill: string = '';
}
