import { AfterViewInit, Component, Input } from '@angular/core';
import {
    ProjectImage,
    ProjectImages
} from '../../../../interfaces/project.interface';
import { gsap } from 'gsap/gsap-core';

@Component({
    selector: 'work-images',
    templateUrl: './work-images.component.html',
    imports: []
})
export class WorkImagesComponent implements AfterViewInit {
    @Input() images: ProjectImages | null = null;

    get deviceImages(): ProjectImage[] {
        const deviceOrder: (keyof ProjectImages)[] = ['smartphone', 'tablet'];

        return deviceOrder
            .map((key) => this.images?.[key])
            .filter((image): image is ProjectImage => !!image);
    }

    public ngAfterViewInit(): void {
        gsap.fromTo(
            '.work-images',
            { opacity: 0, y: 3 },
            {
                opacity: 1,
                y: 0,
                delay: 0.85,
                duration: 1,
                ease: 'power2.inOut'
            }
        );
    }
}
