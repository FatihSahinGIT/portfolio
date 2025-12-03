import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { bootstrapSunFill, bootstrapMoonFill } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    imports: [NgIcon],
    providers: [provideIcons({ bootstrapSunFill, bootstrapMoonFill })],
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
    public isDarkMode: WritableSignal<boolean> = signal(false);

    ngOnInit(): void {
        this.detectDarkMode();
    }

    public toggleTheme(): void {
        document.documentElement.classList.toggle('dark');
        this.detectDarkMode();
    }

    private detectDarkMode(): void {
        const isDarkMode = document.documentElement.classList.contains('dark');
        this.isDarkMode.set(isDarkMode);
    }

    public logoSrc(): string {
        return this.isDarkMode()
            ? '/nav-logo/nav-logo-dark.svg'
            : '/nav-logo/nav-logo.svg';
    }
}
