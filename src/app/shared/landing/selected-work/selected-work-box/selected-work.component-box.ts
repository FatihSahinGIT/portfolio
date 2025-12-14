import { Component, Input } from '@angular/core';

@Component({
    selector: 'selected-work-box',
    templateUrl: './selected-work.component-box.html',

})
export class SelectedWorkBoxComponent {
    @Input() name: string = '';
    @Input() imageUrl: string = '';
    @Input() imageAlt: string = '';
    @Input() tools: string[] = [];

}