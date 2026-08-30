import { Component, Input } from '@angular/core';
import { formatSrcset } from '../../../content/projects/project-image';
import { ProjectImage, ProjectImages } from '../../../content/projects/project.types';

@Component({
  selector: 'work-images',
  templateUrl: './work-images.component.html',
  imports: [],
})
export class WorkImagesComponent {
  @Input() image: ProjectImages | null = null;
  @Input() projectCompany = '';

  getSrcset(srcset: ProjectImage['srcset']): string | null {
    return formatSrcset(srcset);
  }
}
