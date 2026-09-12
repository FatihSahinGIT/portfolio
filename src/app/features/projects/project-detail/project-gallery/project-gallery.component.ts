import { Component, Input } from '@angular/core';
import { formatSrcset } from '../../project-image';
import { ProjectImage, ProjectImages } from '../../project.interface';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  imports: [],
})
export class ProjectGalleryComponent {
  @Input() image: ProjectImages | null = null;
  @Input() projectCompany = '';

  getSrcset(srcset: ProjectImage['srcset']): string | null {
    return formatSrcset(srcset);
  }
}
