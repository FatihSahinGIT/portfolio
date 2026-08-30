import { AfterViewInit, Component, ElementRef, inject, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { Router, RouterLink } from '@angular/router';
import { GsapService } from '../../services/gsap.service';
import { workOverviewListVars } from './work-overview.gsap';
import { projectCatalog } from '../../../content/projects/project-catalog';
import { formatSrcset } from '../../../content/projects/project-image';
import { ProjectImage } from '../../../content/projects/project.types';

@Component({
  selector: 'work-overview',
  templateUrl: './work-overview.component.html',
  styleUrl: './work-overview.component.css',
  imports: [RouterLink],
})
export class WorkOverviewComponent implements AfterViewInit, OnDestroy {
  public readonly projects = projectCatalog;

  readonly #elementRef = inject(ElementRef<HTMLElement>);
  readonly #router: Router = inject(Router);
  readonly #gsapService: GsapService = inject(GsapService);
  #gsapContext?: gsap.Context;

  ngAfterViewInit(): void {
    this.#gsapContext = this.#gsapService.context(this.#elementRef.nativeElement, () => {
      gsap.fromTo('.work-overview__list', workOverviewListVars.from, workOverviewListVars.to);
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
