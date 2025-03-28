import { Routes, RouterLink } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'impressum', component: ImpressumComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
    ],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
