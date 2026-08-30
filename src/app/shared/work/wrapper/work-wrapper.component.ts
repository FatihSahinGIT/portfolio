import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { gsap } from 'gsap';

import { WorkInformationComponent } from '../information/work-information.component';
import { WorkImagesComponent } from '../images/work-images.component';
import { WorkTextComponent } from '../text/work-text.component';
import { WorkDetailsComponent } from '../details/work-details.component';
import { WorkCollageComponent } from '../collage/work-collage.component';
import { ActivatedRoute } from '@angular/router';
import { GsapService } from '../../services/gsap.service';
import { workWrapperFadeInAnimation } from './work-wrapper.gsap';
import { loadProject } from '../../../content/projects/project.repository';
import { Project } from '../../../content/projects/project.types';

@Component({
  selector: 'work-wrapper',
  templateUrl: './work-wrapper.component.html',
  imports: [
    WorkInformationComponent,
    WorkImagesComponent,
    WorkTextComponent,
    WorkCollageComponent,
    WorkDetailsComponent,
  ],
})
export class WorkWrapperComponent implements OnInit, OnDestroy {
  public projectSignal: WritableSignal<Project | null> = signal(null);

  readonly #route = inject(ActivatedRoute);
  readonly #elementRef = inject(ElementRef<HTMLElement>);
  readonly #gsapService = inject(GsapService);
  #gsapContext?: gsap.Context;
  #animationTimer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.#route.params.subscribe(async (params) => {
      const project = params['project'];
      this.projectSignal.set((await loadProject(project)) ?? null);

      this.#gsapContext?.revert();
      this.#animationTimer = setTimeout(() => this.#initializeAnimations());
    });
  }

  #initializeAnimations(): void {
    this.#gsapContext = this.#gsapService.context(this.#elementRef.nativeElement, () => {
      const select = gsap.utils.selector(this.#elementRef.nativeElement);
      const components = workWrapperFadeInAnimation.targets.flatMap((target) => select(target));

      components.forEach((component) => {
        gsap.fromTo(component, workWrapperFadeInAnimation.from, {
          ...workWrapperFadeInAnimation.to,
          scrollTrigger: {
            trigger: component,
            ...workWrapperFadeInAnimation.scrollTrigger,
          },
        });
      });
    });
  }

  ngOnDestroy(): void {
    clearTimeout(this.#animationTimer);
    this.#gsapContext?.revert();
  }
}
