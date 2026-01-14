import { AfterViewInit, Component, inject, Input } from '@angular/core';
import { gsap } from 'gsap/gsap-core';
import { projects } from '../../../../projects.json';
import { Router } from '@angular/router';
import { OverlayService } from '../../services/overlay.service';

@Component({
    selector: 'work-overview',
    templateUrl: './work-overview.component.html',
    styleUrl: './work-overview.component.css',
    imports: []
})
export class WorkOverviewComponent implements AfterViewInit {
    public readonly projects = projects;

    readonly #router: Router = inject(Router);
    readonly #overlayService: OverlayService = inject(OverlayService);

    ngAfterViewInit(): void {
        gsap.fromTo(
            '#work-overview-heading',
            { y: 5, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                ease: 'power2.inOut',
                duration: 1,
                delay: 0.5
            }
        );

        gsap.fromTo(
            '.work-overview__list',
            { y: 5, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                ease: 'power2.inOut',
                duration: 1,
                delay: 0.75
            }
        );
    }

    public async navigateToProject(
        event: Event,
        project: string
    ): Promise<void> {
        event.preventDefault();

        if (this.#router.url === '/work/' + project) {
            return;
        }

        await this.#overlayService.playCover();
        this.#router.navigateByUrl('/work/' + project);
    }
}
