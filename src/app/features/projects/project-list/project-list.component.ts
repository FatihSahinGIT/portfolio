import { AfterViewInit, Component, ElementRef, inject, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { Router, RouterLink } from '@angular/router';
import { GsapService } from '../../../core/animation/gsap.service';
import { projectListAnimation } from './project-list.animation';
import { projectCatalog } from '../project-catalog';
import { formatSrcset } from '../project-image';
import { ProjectImage } from '../project.interface';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  imports: [RouterLink],
})
export class ProjectListComponent implements AfterViewInit, OnDestroy {
  public readonly projects = projectCatalog;

  readonly #elementRef = inject(ElementRef<HTMLElement>);
  readonly #router: Router = inject(Router);
  readonly #gsapService: GsapService = inject(GsapService);
  #gsapContext?: gsap.Context;

  ngAfterViewInit(): void {
    this.#gsapContext = this.#gsapService.context(this.#elementRef.nativeElement, () => {
      gsap.fromTo('.work-overview__list', projectListAnimation.from, projectListAnimation.to);
    });
  }

  ngOnDestroy(): void {
    this.#gsapContext?.revert();
  }

  getSrcset(srcset: ProjectImage['srcset']): string | null {
    return formatSrcset(srcset);
  }

  public async navigateToProject(event: Event, project: string): Promise<void> {
    event.preventDefault();

    if (this.#router.url === '/work/' + project) {
      return;
    }

    this.#router.navigateByUrl('/work/' + project);
  }
}
