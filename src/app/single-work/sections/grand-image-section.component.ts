import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grand-image-section',
  templateUrl: './grand-image-section.component.html',
  styleUrls: ['./grand-image-section.component.css']
})
export class GrandImageSectionComponent {
  @Input() image: any;
}
