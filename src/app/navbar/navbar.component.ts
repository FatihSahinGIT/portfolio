import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    inject,
    Output,
    signal,
    WritableSignal
} from '@angular/core';
import {
    bootstrapLightbulbFill,
    bootstrapMoonFill
} from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { gsap } from 'gsap/gsap-core';
import { ROUTE_PATHS } from '../app.routes';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    imports: [NgIcon],
    providers: [provideIcons({ bootstrapLightbulbFill, bootstrapMoonFill })],
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
    readonly #el: ElementRef = inject(ElementRef);
    @Output() navTransition = new EventEmitter<string>();

    public isDarkMode: WritableSignal<boolean> = signal(false);
    public ROUTE_PATHS = ROUTE_PATHS;

    ngAfterViewInit(): void {
        gsap.from(this.#el.nativeElement.querySelectorAll('.fade-in'), {
            opacity: 0,
            y: 10,
            duration: 1.5,
            ease: 'power3.out'
        });
    }

    public toggleTheme(): void {
        document.documentElement.classList.toggle('dark');
        this.detectDarkMode();
    }

    private detectDarkMode(): void {
        const isDarkMode = document.documentElement.classList.contains('dark');
        this.isDarkMode.set(isDarkMode);
    }
}
