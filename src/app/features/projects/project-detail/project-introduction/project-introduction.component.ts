import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-project-introduction',
  templateUrl: './project-introduction.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class ProjectIntroductionComponent {
  @Input() text!: string;
}
