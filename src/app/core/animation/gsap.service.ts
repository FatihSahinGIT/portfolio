import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root',
})
export class GsapService {
  private readonly motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  get prefersReducedMotion(): boolean {
    return this.motionQuery.matches;
  }

  context(scope: Element, setup: () => void): gsap.Context {
    return gsap.context(() => {
      if (!this.prefersReducedMotion) {
        setup();
      }
    }, scope);
  }

  set(target: gsap.TweenTarget, vars: gsap.TweenVars): gsap.core.Tween {
    return gsap.set(target, vars);
  }

  killTweensOf(target: gsap.TweenTarget): void {
    gsap.killTweensOf(target);
  }
}
