import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { ImpressumComponent } from './app/impressum/impressum.component';
import { PrivacyPolicyComponent } from './app/privacy-policy/privacy-policy.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
