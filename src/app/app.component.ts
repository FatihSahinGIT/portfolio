import { Component, OnDestroy, OnInit } from '@angular/core';
import Lenis from 'lenis';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapArrowRight, bootstrapArrowLeft } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgIcon],
  providers: [provideIcons({ bootstrapArrowRight, bootstrapArrowLeft })],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  #lenis!: Lenis;
  #rafId!: number;

  ngOnInit() {
    this.#lenis = new Lenis({
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
