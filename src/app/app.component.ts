import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import Lenis from 'lenis';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  #lenis!: Lenis;
  #rafId!: number;

  ngOnInit() {
    this.#lenis = new Lenis({
      // Customize options as needed
      lerp: 0.1,
      smoothWheel: true,
      orientation: 'vertical',
    });

    const raf = (time: number) => {
      this.#lenis.raf(time);
      this.#rafId = requestAnimationFrame(raf);
    };
    this.#rafId = requestAnimationFrame(raf);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.#rafId);
    this.#lenis.destroy();
  }
}
