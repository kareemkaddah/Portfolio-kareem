import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  @Input() projectDescription: string = '';
  @Input() projectImage: string = '';
  @Input() projectName: string = '';
  getProjectImage(): string {
    // Check if the image is an online URL
    if (this.projectImage.startsWith('http')) {
      return this.projectImage;
    } else {
      // Use local asset from the "assets" folder
      return `assets/${this.projectImage}`;
    }
  }
}
