import {
    AfterViewInit,
    Component,
    ElementRef,
    inject,
    OnInit,
    signal,
    WritableSignal
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    bootstrapLightbulbFill,
    bootstrapMoonFill
} from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { gsap } from 'gsap/gsap-core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    imports: [RouterLink, NgIcon],
    providers: [provideIcons({ bootstrapLightbulbFill, bootstrapMoonFill })],
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit, OnInit {
    readonly #el: ElementRef = inject(ElementRef);

    public isDarkMode: WritableSignal<boolean> = signal(false);

    ngOnInit(): void {
        // this.detectDarkMode();
    }

    ngAfterViewInit(): void {
        gsap.from(this.#el.nativeElement.querySelectorAll('.fade-in'), {
            opacity: 0,
            y: 10,
            duration: 5,
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
