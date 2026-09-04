import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { formatSrcset } from '../../../../content/projects/project-image';
import { ProjectImage } from '../../../../content/projects/project.types';


@Component({
    selector: 'selected-work-box',
    templateUrl: './selected-work-box.component.html',
    styleUrl: './selected-work-box.component.css'
})
export class SelectedWorkBoxComponent {
    @Input() name: string = '';
    @Input({ required: true }) image!: ProjectImage;
    @Input() tools: string[] = [];
    @Input() projectUrl!: string;

    readonly #router = inject(Router);

    protected readonly getSrcset = formatSrcset;


    public async navigateToProject(event: Event): Promise<void> {
        event.preventDefault();

        if (this.#router.url === "/work/" + this.projectUrl) {
            return;
        }


        this.#router.navigateByUrl("/work/" + this.projectUrl);
    }


}
