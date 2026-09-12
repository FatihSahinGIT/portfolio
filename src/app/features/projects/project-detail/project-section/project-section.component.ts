import { Component, ElementRef, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-project-section',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './project-section.component.html',
})
export class ProjectSectionComponent {
  @Input() headline!: string;
  @Input() text!: string;
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLElement>;
}
