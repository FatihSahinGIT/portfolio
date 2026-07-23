import { AfterViewInit, Component, Input } from '@angular/core';
import {
  ProjectImage,
  ProjectImages,
  ProjectImageSource,
} from '../../../../interfaces/project.interface';
import { gsap } from 'gsap/gsap-core';

@Component({
  selector: 'work-images',
  templateUrl: './work-images.component.html',
  imports: [],
})
export class WorkImagesComponent implements AfterViewInit {
  @Input() image: ProjectImages | null = null;

  getSrcset(srcset: ProjectImageSource[]): string {
    return srcset.map((source) => `${source.url} ${source.width}w`).join(', ');
  }

  public ngAfterViewInit(): void {
    console.log('Image: ', this.image);

    gsap.fromTo(
      '.work-images',
      { opacity: 0, y: 3 },
      {
        opacity: 1,
        y: 0,
        delay: 0.85,
        duration: 1,
        ease: 'power2.inOut',
      }
    );
  }
}
