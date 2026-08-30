import { AfterViewInit, Component } from '@angular/core';
import { SelectedWorkBoxComponent } from './selected-work-box/selected-work.component-box';
import { gsap } from 'gsap';
import { selectedProjects } from '../../../content/projects/project-catalog';

@Component({
  selector: 'selected-work',
  templateUrl: './selected-work.component.html',
  imports: [SelectedWorkBoxComponent],
})
export class SelectedWorkComponent implements AfterViewInit {
  readonly selectedProjects = selectedProjects;

  ngAfterViewInit(): void {
    const headlineEl = document.querySelector('.selected-work__heading');
    if (headlineEl) {
      gsap.fromTo(
        headlineEl,
        { y: 3, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.0125,
          delay: 0.5,
          ease: 'power1.in',
        }
      );
    }

    const boxes = gsap.utils.toArray<HTMLElement>('selected-work-box');
    if (boxes.length) {
      gsap.fromTo(
        boxes,
        { y: 3, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.5,
          delay: 1,
          ease: 'power1.in',
        }
      );
    }
  }
}
