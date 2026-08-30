import { Component, Input } from '@angular/core';
import { formatSrcset } from '../../../content/projects/project-image';
import { ProjectImage, ProjectImages } from '../../../content/projects/project.types';

@Component({
  selector: 'work-collage',
  templateUrl: './work-collage.component.html',
})
export class WorkCollageComponent {
  @Input() images: ProjectImages | null | undefined;

  protected getSrcset(srcset: ProjectImage['srcset']): string | null {
    return formatSrcset(srcset);
  }
}
