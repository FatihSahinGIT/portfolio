import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlights-section',
  templateUrl: './highlights-section.component.html',
  styleUrls: ['./highlights-section.component.css']
})
export class HighlightsSectionComponent {
  @Input() project: any;
}
