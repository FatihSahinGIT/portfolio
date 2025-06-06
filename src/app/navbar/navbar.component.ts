import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements AfterViewInit {
  readonly #el: ElementRef = inject(ElementRef);

  ngAfterViewInit(): void {

    gsap.from(this.#el.nativeElement.querySelectorAll('.fade-in'), {
      opacity: 0,
      y: 10,
      duration: 3,
      ease: 'power3.out'
    })
  }
}
