import { AfterViewInit, Component, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { GsapService } from '../../services/gsap.service';
import { separatorVars, subheadlineVars } from './headline.gsap';

@Component({
  selector: 'headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css'],
})
export class HeadlineComponent implements AfterViewInit, OnDestroy {
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
