import { Component, Input } from '@angular/core';

@Component({
    selector: 'work-text',
    templateUrl: './work-text.component.html',
    imports: []
})
export class WorkTextComponent {
  @Input() text!: string;
}
