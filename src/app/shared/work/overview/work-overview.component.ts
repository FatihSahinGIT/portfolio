import { AfterViewInit, Component, ElementRef, inject, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import projectsJson from '../../../../projects.json';
import { Project, ProjectImageSource } from '../../../../interfaces/project.interface';
import { Router, RouterLink } from '@angular/router';
import { GsapService } from '../../services/gsap.service';
import { workOverviewListVars } from './work-overview.gsap';

@Component({
  selector: 'work-overview',
  templateUrl: './work-overview.component.html',
  styleUrl: './work-overview.component.css',
  imports: [RouterLink],
})
export class WorkOverviewComponent implements AfterViewInit, OnDestroy {
  public readonly projects: Project[] = projectsJson.projects;

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

  getSrcset(srcset: ProjectImageSource[]): string {
    return srcset.map((source) => `${source.url} ${source.width}w`).join(', ');
  }

  public async navigateToProject(event: Event, project: string): Promise<void> {
    event.preventDefault();

    if (this.#router.url === '/work/' + project) {
      return;
    }

    this.#router.navigateByUrl('/work/' + project);
  }
}
