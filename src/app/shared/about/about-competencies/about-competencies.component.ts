import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
    selector: 'about-competencies',
    templateUrl: './about-competencies.component.html',
    imports: []
})
export class AboutCompetenciesComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        gsap.from('.about-competencies', {
            duration: 1,
            y: 5,
            opacity: 0,
            delay: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about-competencies',
                once: false
            }
        });
    }
}
