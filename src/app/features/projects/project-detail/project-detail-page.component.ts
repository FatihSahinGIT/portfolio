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

import { ProjectInformationComponent } from './project-information/project-information.component';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';
import { ProjectIntroductionComponent } from './project-introduction/project-introduction.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { ProjectCollageComponent } from './project-collage/project-collage.component';
import { ActivatedRoute } from '@angular/router';
import { GsapService } from '../../../core/animation/gsap.service';
import { projectDetailPageAnimation } from './project-detail-page.animation';
import { loadProject } from '../project.repository';
import { Project } from '../project.interface';

@Component({
  selector: 'app-project-detail-page',
  templateUrl: './project-detail-page.component.html',
  imports: [
    ProjectInformationComponent,
    ProjectGalleryComponent,
    ProjectIntroductionComponent,
    ProjectCollageComponent,
    ProjectSectionComponent,
  ],
})
export class ProjectDetailPageComponent implements OnInit, OnDestroy {
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
      const components = projectDetailPageAnimation.targets.flatMap((target) => select(target));

      components.forEach((component) => {
        gsap.fromTo(component, projectDetailPageAnimation.from, {
          ...projectDetailPageAnimation.to,
          scrollTrigger: {
            trigger: component,
            ...projectDetailPageAnimation.scrollTrigger,
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
