import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { bootstrapSunFill, bootstrapMoonFill } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { OverlayService } from '../../../services/overlay.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    imports: [NgIcon],
    providers: [provideIcons({ bootstrapSunFill, bootstrapMoonFill })],
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
    public isDarkMode: WritableSignal<boolean> = signal(false);

    constructor(
        private router: Router,
        private overlayService: OverlayService
    ) {}

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

    public async navigate(event: Event, path: string): Promise<void> {
        event.preventDefault();

        if (this.router.url === path) {
            return;
        }

        await this.overlayService.playCover();
        this.router.navigateByUrl(path);
    }
}
