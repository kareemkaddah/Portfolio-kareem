import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { NgModule } from '@angular/core';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'imprint', component: ImprintComponent },
];
