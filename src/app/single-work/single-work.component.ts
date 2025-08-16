import {
    AfterViewInit,
    Component,
    ElementRef,
    inject,
    OnInit,
    ViewChild
} from '@angular/core';
import * as PROJECT_DATA from '../selected-works/projects.json';
import { ActivatedRoute } from '@angular/router';
import { gsap } from 'gsap/gsap-core';
import { Project } from '../../interfaces/project.interface';

@Component({
    selector: 'app-single-work',
    imports: [],
    templateUrl: './single-work.component.html',
    styleUrl: './single-work.component.css'
})
export class SingleWorkComponent implements OnInit, AfterViewInit {
    readonly #activatedRoute = inject(ActivatedRoute);
    @ViewChild('infoContainer', { static: false })
    public infoContainer!: ElementRef<HTMLDivElement>;
    public project: Project | null = null;

    private projects: Project[] = (PROJECT_DATA as any).default;

    ngOnInit(): void {
        this.fetchProject();
    }

    ngAfterViewInit(): void {
        gsap.from(this.infoContainer.nativeElement, {
            opacity: 0,
            delay: 0.5,
            y: 2,
            duration: 4,
            stagger: 2.5,
            ease: 'expo.out'
        });

        const border =
            this.infoContainer.nativeElement.querySelector('.border-anim');
        gsap.to(border, {
            scaleX: 1,
            duration: 2.5,
            delay: 1,
            ease: 'power3.out'
        });
    }

    private fetchProject(): void {
        const workName =
            this.#activatedRoute.snapshot.paramMap.get('workName') || '';
        this.project =
            this.projects.find((p: Project) => p.company === workName) || null;
    }
}
