import { AfterViewInit, Component, inject, Input } from '@angular/core';
import { gsap } from 'gsap/gsap-core';
import { works } from '../../../../work.json';
import { Router } from '@angular/router';
import { OverlayService } from '../../services/overlay.service';

@Component({
    selector: 'work-overview',
    templateUrl: './work-overview.component.html',
    imports: []
})
export class WorkOverviewComponent implements AfterViewInit {
    public readonly works = works;

    readonly #router: Router = inject(Router);
    readonly #overlayService: OverlayService = inject(OverlayService);

    ngAfterViewInit(): void {
        
    }

    public async navigateToProject(event: Event, project: string): Promise<void> {
        event.preventDefault();

        if (this.#router.url === "/work/" + project) {
            return;
        }

        await this.#overlayService.playCover();
        this.#router.navigateByUrl("/work/" + project);
    }
}
