import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-education-block',
    standalone: true,
    templateUrl: './education-block.component.html',
    styleUrls: ['./education-block.component.css']
})
export class EducationBlockComponent {
    @Input() headline!: string;
    @Input() duration!: string;
    @Input() text!: string;

}
