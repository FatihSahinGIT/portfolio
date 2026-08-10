import { Component, OnDestroy, OnInit } from '@angular/core';
import Lenis from 'lenis';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { bootstrapArrowLeft, bootstrapArrowRight } from '@ng-icons/bootstrap-icons';
import { filter, Subject, takeUntil } from 'rxjs';

import { NavbarComponent } from './shared/components/layout/navbar/navbar.component';
import { FooterComponent } from './shared/components/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  providers: [provideIcons({ bootstrapArrowRight, bootstrapArrowLeft })],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  #lenis!: Lenis;
  #rafId!: number;
  #destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
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

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntil(this.#destroy$)
      )
      .subscribe(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.#lenis.scrollTo(0, {
              immediate: true,
              force: true,
            });
          });
        });
      });
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();

    cancelAnimationFrame(this.#rafId);
    this.#lenis.destroy();
  }
}
