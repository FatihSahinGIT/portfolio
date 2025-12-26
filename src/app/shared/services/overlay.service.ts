import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OverlayService {
    #overlay: HTMLElement | null = null;
    #pendingReveal = false;
    #fallbackTimeoutId: number | null = null;

    // Store the overlay element so other components can trigger animations.
    public registerOverlay(element: HTMLElement): void {
        this.#overlay = element;
    }

    // Animate the overlay up to cover the page before navigation.
    public playCover(): Promise<void> {
        this.#pendingReveal = true;
        return this.playAnimation('is-covering');
    }

    // Animate the overlay down to reveal the new page after navigation. TODO - always go to top when page is loaded
    public playReveal(): void {
        if (!this.#pendingReveal) {
            return;
        }

        this.#pendingReveal = false;
        void this.playAnimation('is-revealing');
        window.scrollTo(0, 0);
    }

    // Toggle the animation class and resolve when the animation finishes.
    private playAnimation(className: 'is-covering' | 'is-revealing') {

        const overlay = this.#overlay;
        if (!overlay) {
            return Promise.resolve();
        }

        return new Promise<void>((resolve) => {
            const fallbackMs = this.getAnimationTimeout(overlay);
            const finish = () => {
                if (this.#fallbackTimeoutId !== null) {
                    window.clearTimeout(this.#fallbackTimeoutId);
                    this.#fallbackTimeoutId = null;
                }
                resolve();
            };
            const handleAnimationEnd = () => finish();
            overlay.addEventListener('animationend', handleAnimationEnd, {
                once: true
            });
            overlay.classList.remove('is-covering', 'is-revealing');
            // Force reflow so the same animation can retrigger reliably.
            void overlay.offsetWidth;
            overlay.classList.add(className);

            // Fallback so navigation can't hang if animationend doesn't fire.
            this.#fallbackTimeoutId = window.setTimeout(finish, fallbackMs);
        });
    }

    private getAnimationTimeout(overlay: HTMLElement): number {
        const style = window.getComputedStyle(overlay);
        const durations = style.animationDuration
            .split(',')
            .map((duration) => this.parseTimeMs(duration));
        const delays = style.animationDelay
            .split(',')
            .map((delay) => this.parseTimeMs(delay));
        const totals = durations.map((duration, index) => {
            const delay = delays[index] ?? delays[0] ?? 0;
            return duration + delay;
        });
        const maxDuration = Math.max(0, ...totals);

        return maxDuration > 0 ? maxDuration + 100 : 1000;
    }

    private parseTimeMs(value: string): number {
        const trimmed = value.trim();
        if (trimmed.endsWith('ms')) {
            return Number.parseFloat(trimmed);
        }
        if (trimmed.endsWith('s')) {
            return Number.parseFloat(trimmed) * 1000;
        }
        const numeric = Number.parseFloat(trimmed);
        return Number.isFinite(numeric) ? numeric : 0;
    }
}
