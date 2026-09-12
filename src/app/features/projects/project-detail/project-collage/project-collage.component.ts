import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { formatSrcset } from '../../project-image';
import { ProjectImage, ProjectImages } from '../../project.interface';

@Component({
  selector: 'app-project-collage',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './project-collage.component.html',
})
export class ProjectCollageComponent {
  @Input() images: ProjectImages | null | undefined;

  protected getSrcset(srcset: ProjectImage['srcset']): string | null {
    return formatSrcset(srcset);
  }
}
