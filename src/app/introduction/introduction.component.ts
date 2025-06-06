import { AfterViewInit, Component, ElementRef, inject, OnInit } from '@angular/core';
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
      duration: 3,
      stagger: 0.5,
      ease: 'expo.out',
    });
  }
}
