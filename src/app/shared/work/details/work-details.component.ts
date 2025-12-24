import { Component, Input } from '@angular/core';

@Component({
    selector: 'work-details',
    templateUrl: './work-details.component.html',
    imports: []
})
export class WorkDetailsComponent {
    @Input() headline!: string;
    @Input() text!: string;
}
