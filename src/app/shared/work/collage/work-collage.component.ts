import { Component, Input } from '@angular/core';

import {
  ProjectImages,
  ProjectImageSource,
} from '../../../../interfaces/project.interface';

@Component({
  selector: 'work-collage',
  templateUrl: './work-collage.component.html',
})
export class WorkCollageComponent {
  @Input() images: ProjectImages | null | undefined;

  protected getSrcset(srcset: ProjectImageSource[]): string {
    return srcset
      .map((source) => `${source.url} ${source.width}w`)
      .join(', ');
  }
}
