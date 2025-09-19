import { Injectable, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap/gsap-core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransitionService {
    private overlayRef?: ElementRef;
    private overlayDone$ = new Subject<void>();

    constructor(private router: Router) {}
    registerOverlay(ref: ElementRef) {
        this.overlayRef = ref;

        gsap.set(this.overlayRef.nativeElement, { y: '100%', opacity: 0 });
    }

    get overlayDone() {
        return this.overlayDone$.asObservable();
    }

    async transitionAndNavigate(url: string, skipIfCurrent = true) {
        if (!this.overlayRef) throw new Error('Overlay not registered');
        if (skipIfCurrent && this.router.url === url) return;

        await gsap.to(this.overlayRef.nativeElement, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        });
        this.router.navigateByUrl(url).then((success) => {
            if (!success) {
                gsap.set(this.overlayRef!.nativeElement, {
                    y: '100%',
                    opacity: 0
                });
            }
        });
    }

    animateOverlayOut() {
        if (!this.overlayRef) return;
        gsap.to(this.overlayRef.nativeElement, {
            y: '100%',
            opacity: 0,
            duration: 0.6,
            ease: 'power3.inOut',
            clearProps: 'all',
            onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                gsap.set(this.overlayRef!.nativeElement, {
                    y: '100%',
                    opacity: 0
                });

                this.overlayDone$.next();
            }
        });
    }
}
