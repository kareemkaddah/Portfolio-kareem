import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ExperienceComponent } from '../experience/experience.component';
import { Router, RouterModule } from '@angular/router';
import { SkillBoxComponent } from '../skill-box/skill-box.component';
import { ProjectsComponent } from '../projects/projects.component';
import { LanguageBoxComponent } from '../language-box/language-box.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { ImpressumComponent } from '../impressum/impressum.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterModule,

    RouterLink,
    RouterOutlet,
    ExperienceComponent,
    SkillBoxComponent,
    ProjectsComponent,
    LanguageBoxComponent,
    LanguageBoxComponent,
    SocialMediaComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('fadeLeftIn', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
          filter: 'blur(10px)',
        }), // Start off-screen (left)
        animate(
          '800ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)', filter: 'blur(0)' })
        ), // Animate to visible position
      ]),
    ]),

    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-30px)' }), // Start off-screen
        animate(
          '1000ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ), // Fade in and slide down
      ]),
    ]),
  ],
})
export class AboutComponent {}
