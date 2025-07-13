import {
    AfterViewInit,
    Component,
    ElementRef,
    inject,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';
import Lenis from 'lenis';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
    bootstrapArrowRight,
    bootstrapArrowLeft
} from '@ng-icons/bootstrap-icons';
import { FooterComponent } from './footer/footer.component';
import { gsap } from 'gsap/gsap-core';
import { OverlayService } from './overlay.service';
import { ROUTE_PATHS } from './app.routes';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, FooterComponent],
    providers: [provideIcons({ bootstrapArrowRight, bootstrapArrowLeft })],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild('transitionOverlay', { static: true })
    public transitionOverlay!: ElementRef;

    #lenis!: Lenis;
    #rafId!: number;

    readonly #router: Router = inject(Router);
    readonly #overlayService: OverlayService = inject(OverlayService);

    ngOnInit() {
        this.#lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
            orientation: 'vertical'
        });

        const raf = (time: number) => {
            this.#lenis.raf(time);
            this.#rafId = requestAnimationFrame(raf);
        };
        this.#rafId = requestAnimationFrame(raf);

        this.#router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                // Animate overlay out (move down and fade out)
                gsap.to(this.transitionOverlay.nativeElement, {
                    y: '100%',
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power3.inOut',
                    clearProps: 'all',
                    onComplete: () => {
                        // Reset overlay to initial state after animation
                        gsap.set(this.transitionOverlay.nativeElement, {
                            y: '100%',
                            opacity: 0
                        });
                        // Notify overlay animation is done
                        this.#overlayService.notifyOverlayDone();
                    }
                });
            }
        });
    }

    ngAfterViewInit(): void {
        gsap.set(this.transitionOverlay.nativeElement, {
            y: '100%',
            opacity: 0
        });
    }

    public async transitionAndNavigate(url: string) {
        if (this.isCurrentRoute(url)) return;

        await gsap
            .to(this.transitionOverlay.nativeElement, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            })
            .then();
        this.#router.navigateByUrl(url).then((success) => {
            if (!success) {
                // If navigation fails, reset overlay
                gsap.set(this.transitionOverlay.nativeElement, {
                    y: '100%',
                    opacity: 0
                });
            }
        });
    }

    private isCurrentRoute(url: string): boolean {
        return this.#router.url === url;
    }

    ngOnDestroy() {
        cancelAnimationFrame(this.#rafId);
        this.#lenis.destroy();
    }
}
