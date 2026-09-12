import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import qualificationsJson from '../../../qualifications.json';
import { GsapService } from '../../core/animation/gsap.service';
import {
  aboutCardsAnimation,
  aboutImageAnimation,
  aboutIntroAnimation,
} from './about-page.animation';
import { AboutExperienceComponent } from './experience/experience.component';

interface Qualification {
  title: string;
  year: string;
  url: string;
}

const STICKY_TOP_OFFSET = 80;

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [AboutExperienceComponent],
})
export class AboutPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('aboutWrapper', { static: true }) aboutWrapper!: ElementRef<HTMLElement>;
  @ViewChild('stickyImage', { static: true }) stickyImage!: ElementRef<HTMLElement>;
  @ViewChild('stickyImageAsset', { static: true }) stickyImageAsset!: ElementRef<HTMLImageElement>;
  @ViewChild('qualificationsBlock', { static: true })
  qualificationsBlock!: ElementRef<HTMLElement>;

  readonly qualifications: Qualification[] = qualificationsJson.qualifications;

  readonly #gsapService: GsapService = inject(GsapService);
  #gsapContext?: gsap.Context;
  #matchMedia?: gsap.MatchMedia;

  ngAfterViewInit(): void {
    this.#gsapContext = this.#gsapService.context(this.aboutWrapper.nativeElement, () => {
      const select = gsap.utils.selector(this.aboutWrapper.nativeElement);

      const imageElements = aboutImageAnimation.targets.flatMap((target) => select(target));

      const introElements = aboutIntroAnimation.targets.flatMap((target) => select(target));

      const cardElements = aboutCardsAnimation.targets.flatMap((target) => select(target));

      gsap
        .timeline()
        .fromTo(imageElements, aboutImageAnimation.from, aboutImageAnimation.to)
        .fromTo(introElements, aboutIntroAnimation.from, aboutIntroAnimation.to, '<0.2');

      if (cardElements.length > 0) {
        gsap.fromTo(cardElements, aboutCardsAnimation.from, {
          ...aboutCardsAnimation.to,
          scrollTrigger: {
            trigger: cardElements[0],
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        });
      }

      this.#setupStickyImage();
      this.#refreshScrollTriggerWhenImageIsReady();
    });
  }

  ngOnDestroy(): void {
    this.#matchMedia?.revert();
    this.#gsapContext?.revert();
  }

  #setupStickyImage(): void {
    this.#matchMedia = gsap.matchMedia();

    this.#matchMedia.add('(min-width: 768px)', () => {
      const stickyImageTrigger = ScrollTrigger.create({
        trigger: this.aboutWrapper.nativeElement,
        start: () => `top top+=${STICKY_TOP_OFFSET}`,
        endTrigger: this.qualificationsBlock.nativeElement,
        end: () => `bottom top+=${STICKY_TOP_OFFSET + this.stickyImage.nativeElement.offsetHeight}`,
        pin: this.stickyImage.nativeElement,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      return () => stickyImageTrigger.kill();
    });
  }

  #refreshScrollTriggerWhenImageIsReady(): void {
    const image = this.stickyImageAsset.nativeElement;

    if (image.complete) {
      ScrollTrigger.refresh();
      return;
    }

    image.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
  }
}
