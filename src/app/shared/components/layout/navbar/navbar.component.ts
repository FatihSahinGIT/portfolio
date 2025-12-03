import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    inject,
    OnInit,
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

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    imports: [NgIcon],
    providers: [provideIcons({ bootstrapLightbulbFill, bootstrapMoonFill })],
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
}
