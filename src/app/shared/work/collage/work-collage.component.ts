import { Component, Input } from '@angular/core';

import { ProjectImage, ProjectImages } from '../../../../interfaces/project.interface';

@Component({
  selector: 'work-collage',
  templateUrl: './work-collage.component.html',
})
export class WorkCollageComponent {
  @Input() images: ProjectImages | null | undefined;

  protected getSrcset(srcset: ProjectImage['srcset']): string | null {
    return srcset ? srcset.map((source) => `${source.url} ${source.width}w`).join(', ') : null;
  }
}
