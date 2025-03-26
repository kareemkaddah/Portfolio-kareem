import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-imprint',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.css',
})
export class ImprintComponent {
  name = 'Kareem Kaddah';
  address = 'Westerholtstr. 26';
  postalcode = '44579';
  city = 'Castrop-Rauxel';
  email = 'karim.kaddah13@gmail.com';
  phone = '+491718073697';
}
