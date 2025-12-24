import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OverlayService } from '../../../services/overlay.service';

@Component({
    selector: 'selected-work-box',
    templateUrl: './selected-work-box.component.html',
    styleUrl: './selected-work-box.component.css'
})
export class SelectedWorkBoxComponent {
    @Input() name: string = '';
    @Input() imageUrl: string = '';
    @Input() imageAlt: string = '';
    @Input() tools: string[] = [];
    @Input() projectUrl!: string;

    readonly #router = inject(Router);
    readonly #overlayService = inject(OverlayService);

    public async navigateToProject(event: Event): Promise<void> {
        event.preventDefault();

        if (this.#router.url === "/work/" + this.projectUrl) {
            return;
        }

        await this.#overlayService.playCover();
        this.#router.navigateByUrl("/work/" + this.projectUrl);
    }


}
