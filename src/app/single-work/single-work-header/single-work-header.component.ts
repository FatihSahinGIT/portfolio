import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';

@Component({
    selector: 'app-single-work-header',
    standalone: true,
    templateUrl: 'single-work-header.component.html',
    styleUrl: 'single-work-header.component.css',
})
export class SingleWorkHeaderComponent implements OnInit {
    @Input() project: Project | null = null;


    ngOnInit(): void {
    }
}