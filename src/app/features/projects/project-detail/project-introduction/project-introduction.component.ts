import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-project-introduction',
    templateUrl: './project-introduction.component.html',
    imports: []
})
export class ProjectIntroductionComponent {
  @Input() text!: string;
}
