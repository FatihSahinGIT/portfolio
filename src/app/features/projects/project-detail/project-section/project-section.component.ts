import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
})
export class ProjectSectionComponent {
  @Input() headline!: string;
  @Input() text!: string;
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLElement>;
}
