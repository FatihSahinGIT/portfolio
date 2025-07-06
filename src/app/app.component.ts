import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';
import Lenis from 'lenis';
import { NavbarComponent } from './navbar/navbar.component';
import {
    NavigationEnd,
    NavigationStart,
    Router,
    RouterOutlet
} from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
    bootstrapArrowRight,
    bootstrapArrowLeft
} from '@ng-icons/bootstrap-icons';
import { FooterComponent } from './footer/footer.component';
import { gsap } from 'gsap/gsap-core';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, FooterComponent],
    providers: [provideIcons({ bootstrapArrowRight, bootstrapArrowLeft })],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild('pageContainer', { static: true }) pageContainer!: ElementRef;

    #lenis!: Lenis;
    #rafId!: number;

    constructor(private router: Router) {}

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
    }

    ngAfterViewInit(): void {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                gsap.to(this.pageContainer.nativeElement, {
                    height: '100vh',
                    duration: 0.5,
                    ease: 'power2.in'
                });
            }
            if (event instanceof NavigationEnd) {
                
                gsap.to(this.pageContainer.nativeElement, {
                    height: '0vh',
                    duration: 0.5,
                    ease: 'power2.out',
                    delay: 0.1 
                });
            }
        });
    }

    ngOnDestroy() {
        cancelAnimationFrame(this.#rafId);
        this.#lenis.destroy();
    }
}
