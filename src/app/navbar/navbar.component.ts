import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap/gsap-core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterLink],
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements AfterViewInit {
  readonly #el: ElementRef = inject(ElementRef);

  ngAfterViewInit(): void {
    gsap.from(this.#el.nativeElement.querySelectorAll('.fade-in'), {
      opacity: 0,
      y: 10,
      duration: 5,
      ease: 'power3.out',
    });
  }
}
