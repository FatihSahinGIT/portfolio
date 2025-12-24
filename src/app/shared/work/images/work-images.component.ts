import { Component, Input } from '@angular/core';
import { ProjectImage, ProjectImages } from '../../../../interfaces/project.interface';




@Component({
    selector: 'work-images',
    templateUrl: './work-images.component.html',
    imports: []
})
export class WorkImagesComponent {
    @Input() images: ProjectImages | null = null;

    get deviceImages(): ProjectImage[] {
        const deviceOrder: (keyof ProjectImages)[] = ['smartphone', 'tablet'];

        return deviceOrder
            .map((key) => this.images?.[key])
            .filter((image): image is ProjectImage => !!image);
    }
}
