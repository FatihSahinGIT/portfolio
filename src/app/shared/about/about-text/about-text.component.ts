import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
  selector: 'about-text',
  templateUrl: './about-text.component.html',
  imports: [],
})
export class AboutTextComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    gsap.from('.about-text', {
      duration: 1,
      y: 5,
      opacity: 0,
      delay: 0.45,
      ease: 'power2.out',
    });
  }
}
