import {
    AfterViewInit,
    Component,
    ElementRef,
    inject,
    OnInit,
    ViewChild
} from '@angular/core';
import * as PROJECT_DATA from '../selected-works/projects-short.json';
import { ActivatedRoute } from '@angular/router';
import { gsap } from 'gsap/gsap-core';
import { Project } from '../../interfaces/project.interface';

import { SingleWorkHeaderComponent } from "./single-work-header/single-work-header.component";
import { IntroSectionComponent } from './sections/intro-section.component';
import { HighlightsSectionComponent } from './sections/highlights-section.component';
import { TextSectionComponent } from './sections/text-section.component';
import { GrandImageSectionComponent } from './sections/grand-image-section.component';

@Component({
    selector: 'app-single-work',
    imports: [
        SingleWorkHeaderComponent,
        IntroSectionComponent,
        HighlightsSectionComponent,
        TextSectionComponent,
        GrandImageSectionComponent
    ],
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
        // Animate border as before
        const border = this.infoContainer.nativeElement.querySelector('.border-anim');
        gsap.to(border, {
            scaleX: 1,
            duration: 2.5,
            delay: 1,
            ease: 'power3.out'
        });

        // Select all main row divs
        const fadeEls = this.infoContainer.nativeElement.querySelectorAll('.row-start-1, .row-start-2, .row-start-3, .row-start-4, .row-start-5, .row-start-6, .row-start-7');
        fadeEls.forEach(el => {
            gsap.set(el, { opacity: 0, y: 40 });
        });
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        overwrite: 'auto'
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        fadeEls.forEach(el => {
            observer.observe(el);
        });
    }

    private fetchProject(): void {
        const workName =
            this.#activatedRoute.snapshot.paramMap.get('workName') || '';
        this.project =
            this.projects.find((p: Project) => p.company === workName) || null;
    }
}
