import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
  selector: 'app-introduction',
  imports: [],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
})
export class IntroductionComponent implements OnInit, AfterViewInit {
  public greetingHeadline: string = 'Hello';
  readonly #el: ElementRef = inject(ElementRef);
  @ViewChild('introContainer') introContainer!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    this.getGreetingTime();
  }

  public getGreetingTime(): string {
    const currentHour: number = new Date().getHours();
    let period: 'morning' | 'afternoon' | 'evening';

    switch (true) {
      case currentHour >= 5 && currentHour < 12:
        period = 'morning';
        break;
      case currentHour >= 12 && currentHour < 18:
        period = 'afternoon';
        break;
      default:
        period = 'evening';
    }

    switch (period) {
      case 'morning':
        this.greetingHeadline = 'Good Morning';
        break;
      case 'afternoon':
        this.greetingHeadline = 'Good Afternoon';
        break;
      case 'evening':
        this.greetingHeadline = 'Good Evening';
        break;
    }

    return this.greetingHeadline;
  }

  ngAfterViewInit(): void {
    gsap.from(this.#el.nativeElement.querySelectorAll('.fade-in'), {
      opacity: 0,
      delay: 1,
      y: 5,
      duration: 5,
      stagger: 0.5,
      ease: 'expo.out',
    });

    // gsap.fromTo(
    //   this.introContainer.nativeElement,
    //   { borderBottomWidth: '0px' },
    //   { borderBottomWidth: '1px', duration: 0.5, ease: 'power1.out' }
    // );

    const border =
      this.introContainer.nativeElement.querySelector('.border-anim');
    gsap.to(border, {
      scaleX: 1,
      duration: 2.5,
      delay: 2,
      ease: 'power3.out',
    });
  }
}
