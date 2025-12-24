import { Component, Input } from '@angular/core';

@Component({
    selector: 'work-information',
    templateUrl: './work-information.component.html',
    styleUrl: './work-information.component.css',
    imports: []
})
export class WorkInformationComponent {
    @Input() projectName!: string;
    @Input() clientName!: string;
    @Input() projectDate!: string;
    @Input() roleName!: string;
    @Input() projectUrl!: string;
}
