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

  @ViewChild('subheadline', { static: true })
  private subheadline!: ElementRef<HTMLElement>;

  @ViewChild('separator', { static: true })
  private separator!: ElementRef<HTMLHRElement>;

  private gsapContext?: gsap.Context;

  ngAfterViewInit(): void {
    this.gsapContext = this.#gsapService.context(this.#elementRef.nativeElement, () => {
      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      timeline
        .from(this.subheadline.nativeElement, subheadlineVars)
        .from(this.separator.nativeElement, separatorVars, '<0.5');
    });
  }

  ngOnDestroy(): void {
    this.gsapContext?.revert();
  }
}
