import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  imports: [],
})
export class ProjectInformationComponent {
  @Input() projectName!: string;
  @Input() clientName!: string;
  @Input() projectDate!: string;
  @Input() roleName!: string;
  @Input() projectUrl!: string;
}
