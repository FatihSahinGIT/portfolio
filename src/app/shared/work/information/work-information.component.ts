import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';
import { GsapService } from '../../services/gsap.service';
import { workInformationDateItems, workInformationHeadline } from './work-information.gsap';

@Component({
  selector: 'work-information',
  templateUrl: './work-information.component.html',
  styleUrl: './work-information.component.css',
  imports: [],
})
export class WorkInformationComponent implements AfterViewInit, OnDestroy {
  @Input() projectName!: string;
  @Input() clientName!: string;
  @Input() projectDate!: string;
  @Input() roleName!: string;
  @Input() projectUrl!: string;
  @ViewChildren('dateItem') dateItems!: QueryList<ElementRef<HTMLDivElement>>;

  readonly #elementRef = inject(ElementRef<HTMLElement>);
  readonly #gsapService: GsapService = inject(GsapService);
  #gsapContext?: gsap.Context;

  ngAfterViewInit(): void {
    this.#gsapContext = this.#gsapService.context(this.#elementRef.nativeElement, () => {
      gsap.fromTo(
        '.work-information__header',
        workInformationHeadline.from,
        workInformationHeadline.to
      );

      const dateElements = this.dateItems.toArray().map((item) => item.nativeElement);
      gsap.fromTo(dateElements, workInformationDateItems.from, workInformationDateItems.to);
    });
  }

  ngOnDestroy(): void {
    this.#gsapContext?.revert();
  }
}
