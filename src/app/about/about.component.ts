import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('imagesAbout', { static: false })
  imagesAbout!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    gsap.from('.float-image', {
      opacity: 0,
      y: 10,
      delay: 1,
      stagger: 0.5,
      duration: 2,
      ease: 'power2.out',
    });
  }
}
