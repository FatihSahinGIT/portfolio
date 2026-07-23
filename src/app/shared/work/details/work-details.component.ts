import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'work-details',
  templateUrl: './work-details.component.html',
  styleUrl: './work-details.component.css',
})
export class WorkDetailsComponent {
  @Input() headline!: string;
  @Input() text!: string;
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLElement>;
}
