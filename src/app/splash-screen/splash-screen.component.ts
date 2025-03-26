import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
})
export class SplashScreenComponent implements AfterViewInit {
  @ViewChild('intro') intro!: ElementRef;
  @ViewChild('logospan') logospan!: ElementRef;

  ngAfterViewInit() {
    const introElement = this.intro.nativeElement as HTMLElement;
    const logoSpans = this.logospan.nativeElement.querySelectorAll('.logo');

    // Step 1: Show logo animation
    setTimeout(() => {
      logoSpans.forEach((span: HTMLElement, idx: number) => {
        setTimeout(() => {
          span.classList.add('active');
        }, (idx + 1) * 2);
      });

      // Step 2: Remove logo after animation
      setTimeout(() => {
        logoSpans.forEach((span: HTMLElement, idx: number) => {
          setTimeout(() => {
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx + 1) * 50);
        });
      }, 2000);

      // Step 3: Fade out and remove splash screen
      setTimeout(() => {
        introElement.classList.add('hide');
      }, 2800);
    });
  }
}
