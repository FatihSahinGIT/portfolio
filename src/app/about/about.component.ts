import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('imagesAbout', { static: false })
  imagesAbout!: ElementRef<HTMLElement>;

  @ViewChildren('educationBlock', { read: ElementRef })
  educationBlocks!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    gsap.from('.float-image', {
      opacity: 0,
      y: 10,
      delay: 1,
      stagger: 0.5,
      duration: 2,
      ease: 'power2.out',
    });

    console.log('eduaction', this.educationBlocks);

    gsap.from(gsap.utils.toArray('.education-block'), {
      opacity: 0,
      y: 10,
      duration: 1.2,
      stagger: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.education-block',
        start: 'top 30%',
      },
    });

    gsap.from('.work-experience', {
      opacity: 0,
      y: 10,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.work-experience',
        start: 'top 20%',
      },
    });

    ScrollTrigger.refresh();
  }
}
