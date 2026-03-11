import { Component, AfterViewInit, inject } from '@angular/core';
import { gsap } from 'gsap';
import { OverlayService } from '../../services/overlay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css'],
})
export class HeadlineComponent implements AfterViewInit {
  readonly #router: Router = inject(Router);
  readonly #overlayService: OverlayService = inject(OverlayService);

  ngAfterViewInit(): void {
    const headlineEl = document.querySelector('.headline-animated');
    if (headlineEl) {
      gsap.fromTo(
        headlineEl,
        { y: 3, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.0125,
          ease: 'power1.in',
        }
      );
    }

    const subheadlineEl = document.querySelector('.subheadline-animated');
    if (subheadlineEl) {
      gsap.fromTo(
        subheadlineEl,
        { y: 5, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: 'power1.out',
        }
      );
    }

    const headlineSeperatorEl = document.querySelector('.headline__seperator');
    if (headlineSeperatorEl) {
      gsap.fromTo(
        headlineSeperatorEl,
        { width: 0, opacity: 0.2 },
        {
          width: '100%',
          opacity: 1,
          duration: 1.5,
          delay: 0.5,
          ease: 'power2.out',
        }
      );
    }

    const headlineButtonEl = document.querySelector('.headline__button');
    if (headlineButtonEl) {
      gsap.fromTo(
        headlineButtonEl,
        { y: 5, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.75,
          ease: 'power1.out',
        }
      );
    }

    const headlineImageEl = document.querySelector('.headline__image-container');
    if (headlineImageEl) {
      gsap.fromTo(
        headlineImageEl,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power1.out',
        }
      );
    }
  }

  public async navigateToWork(event: Event): Promise<void> {
    event.preventDefault();

    await this.#overlayService.playCover();
    this.#router.navigateByUrl('/work');
  }
}
