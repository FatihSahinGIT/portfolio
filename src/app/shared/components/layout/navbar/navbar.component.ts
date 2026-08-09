import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { Router } from '@angular/router';
import { bootstrapSunFill, bootstrapMoonFill } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { GsapService } from '../../../services/gsap.service';
import { gsap } from 'gsap';
import { navbarLinkAnimation } from './navbar.gsap';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  imports: [NgIcon],
  providers: [provideIcons({ bootstrapSunFill, bootstrapMoonFill })],
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('navbar', { static: true }) navbarElement!: ElementRef<HTMLElement>;

  public isDarkMode: WritableSignal<boolean> = signal(false);

  readonly #router: Router = inject(Router);
  readonly #gsapService: GsapService = inject(GsapService);
  private gsapContext?: gsap.Context;

  ngOnInit(): void {
    this.detectDarkMode();
  }

  ngAfterViewInit(): void {
    this.gsapContext = this.#gsapService.context(this.navbarElement.nativeElement, () => {
      const selectEl = gsap.utils.selector(this.navbarElement.nativeElement);
      const targets = navbarLinkAnimation.targets.flatMap((target) => selectEl(target));

      gsap.fromTo(targets, navbarLinkAnimation.from, navbarLinkAnimation.to);
    });
  }

  ngOnDestroy(): void {
    this.gsapContext?.revert();
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
    return this.isDarkMode() ? '/nav-logo/nav-logo-dark.svg' : '/nav-logo/nav-logo.svg';
  }

  public async navigate(event: Event, path: string): Promise<void> {
    event.preventDefault();

    if (this.#router.url === path) {
      return;
    }

    await this.#router.navigateByUrl(path);
  }
}
