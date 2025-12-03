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
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
    bootstrapArrowRight,
    bootstrapArrowLeft
} from '@ng-icons/bootstrap-icons';

import { TransitionService } from './shared/services/transition.service';
import { NavbarComponent } from "./shared/components/layout/navbar/navbar.component";
import { FooterComponent } from "./shared/components/layout/footer/footer.component";

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

    readonly #transitionService: TransitionService = inject(TransitionService);

    public transitionAndNavigate(url: string) {
        this.#transitionService.transitionAndNavigate(url);
    }

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

        // Listen for navigation end to animate overlay out
        this.#transitionService['router'].events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                this.#transitionService.animateOverlayOut();
            }
        });
    }

    ngAfterViewInit(): void {
        // Register the overlay element with the service
        this.#transitionService.registerOverlay(this.transitionOverlay);
    }

    ngOnDestroy() {
        cancelAnimationFrame(this.#rafId);
        this.#lenis.destroy();
    }
}
