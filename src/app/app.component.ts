import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';
import Lenis from 'lenis';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
    bootstrapArrowRight,
    bootstrapArrowLeft
} from '@ng-icons/bootstrap-icons';
import { Subject, filter, takeUntil } from 'rxjs';

import { NavbarComponent } from './shared/components/layout/navbar/navbar.component';
import { FooterComponent } from './shared/components/layout/footer/footer.component';
import { OverlayService } from './shared/services/overlay.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, FooterComponent],
    providers: [provideIcons({ bootstrapArrowRight, bootstrapArrowLeft })],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
    @ViewChild('transitionOverlay', { static: true })
    public transitionOverlay!: ElementRef;

    #lenis!: Lenis;
    #rafId!: number;
    #destroy$ = new Subject<void>();

    constructor(
        private router: Router,
        private overlayService: OverlayService
    ) {}

    ngOnInit() {
        this.#lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
            orientation: 'vertical'
        });

        this.overlayService.registerOverlay(
            this.transitionOverlay.nativeElement as HTMLElement
        );

        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this.#destroy$)
            )
            .subscribe(() => {
                this.overlayService.playReveal();
            });

        const raf = (time: number) => {
            this.#lenis.raf(time);
            this.#rafId = requestAnimationFrame(raf);
        };
        this.#rafId = requestAnimationFrame(raf);
    }

    ngOnDestroy() {
        this.#destroy$.next();
        this.#destroy$.complete();
        cancelAnimationFrame(this.#rafId);
        this.#lenis.destroy();
    }
}
