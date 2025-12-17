import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
    selector: 'about-qualifications',
    templateUrl: './about-qualifications.component.html',
    imports: []
})
export class AboutQualificationsComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        gsap.from('.about-qualifications', {
            duration: 1,
            y: 5,
            opacity: 0,
            delay: 0.25,
            ease: 'power2.out'
        });
    }
}
