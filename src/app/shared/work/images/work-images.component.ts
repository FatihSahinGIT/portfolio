import { Component, Input } from '@angular/core';
import { ProjectImage, ProjectImages } from '../../../../interfaces/project.interface';

@Component({
  selector: 'work-images',
  templateUrl: './work-images.component.html',
  imports: [],
})
export class WorkImagesComponent {
  @Input() image: ProjectImages | null = null;

  getSrcset(srcset: ProjectImage['srcset']): string | null {
    return srcset ? srcset.map((source) => `${source.url} ${source.width}w`).join(', ') : null;
  }
}
