import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language-box',
  imports: [],
  templateUrl: './language-box.component.html',
  styleUrl: './language-box.component.css',
})
export class LanguageBoxComponent {
  @Input() language: string = '';
}
