import { Component, inject, Input, OnInit } from '@angular/core';
import * as PROJECT_DATA from '../selected-works/projects.json';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-single-work',
    imports: [],
    templateUrl: './single-work.component.html',
    styleUrl: './single-work.component.css'
})
export class SingleWorkComponent implements OnInit {
    public projects = (PROJECT_DATA as any).default;

    readonly #activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    project: any = [];
    public projectName: string = '';

    ngOnInit(): void {
        this.projectName =
            this.#activatedRoute.snapshot.paramMap.get('workName') || '';

        console.log('projectName', this.projectName);

        this.fetchProjectData();
    }

    private fetchProjectData(): void {
        for (const project of this.projects) {
            if (project.company === this.projectName) {
                this.project.push(project);
                console.log('Project found:', project);
            }
        }
    }
}
