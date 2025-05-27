import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import Lenis from '@studio-freight/lenis';
import {gsap} from 'gsap';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  #lenis!: Lenis;
  #rafId!: number;


  ngOnInit(): void {
    gsap.to('.test', {x: 20, duration: 1});
  }

  ngAfterViewInit(): void {
    this.#lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    const raf = (time: number ) => {
      this.#lenis.raf(time);
      this.#rafId = requestAnimationFrame(raf);
    }

    this.#rafId = requestAnimationFrame(raf);
  }



  ngOnDestroy(): void {
    if (this.#rafId) {
      cancelAnimationFrame(this.#rafId);
    }

    if (this.#lenis) {
      this.#lenis.destroy();
    }
  }


}
