import {AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
    selector: 'about-experience',
    templateUrl: './about-experience.component.html',
    imports: []
})
export class AboutExperienceComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        gsap.from('.about-experience', {
            duration: 1,
            y: 5,
            opacity: 0,
            delay: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about-experience',
                start: 'top 100%',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse',
                once: false
            }
        });
    }
}   