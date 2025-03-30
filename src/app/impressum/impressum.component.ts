import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.css',
})
export class ImpressumComponent {}
