import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { WorkInformationComponent } from '../information/work-information.component';
import { WorkImagesComponent } from '../images/work-images.component';
import { WorkTextComponent } from '../text/work-text.component';
import { WorkDetailsComponent } from '../details/work-details.component';
import { projects } from '../../../../projects.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'work-wrapper',
  templateUrl: './work-wrapper.component.html',
  imports: [WorkInformationComponent, WorkImagesComponent, WorkTextComponent, WorkDetailsComponent],
})
export class WorkWrapperComponent implements OnInit {
  public readonly projects = projects;

  public projectSignal: WritableSignal<any> = signal(null);

  readonly #route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.#route.params.subscribe((params) => {
      const project = params['project'];

      const filteredProject = this.projects.find((p) => p.company === project);

      this.projectSignal.set(filteredProject);
    });
  }
}
