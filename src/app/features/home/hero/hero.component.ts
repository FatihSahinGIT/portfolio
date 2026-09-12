import { AfterViewInit, Component, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { GsapService } from '../../../core/animation/gsap.service';
import { separatorVars, subheadlineVars } from './hero.animation';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  readonly #elementRef = inject(ElementRef<HTMLElement>);
  readonly #gsapService = inject(GsapService);

  @ViewChild('headline', { static: true })
  private headline!: ElementRef<HTMLElement>;

  private gsapContext?: gsap.Context;

  ngAfterViewInit(): void {
    this.gsapContext = this.#gsapService.context(this.#elementRef.nativeElement, () => {
      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      timeline.from(this.headline.nativeElement, subheadlineVars);
    });
  }

  ngOnDestroy(): void {
    this.gsapContext?.revert();
  }
}
