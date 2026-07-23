import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap/gsap-core';
import qualificationsJson from '../../../../qualifications.json';

interface Qualification {
    title: string;
    year: string;
    url: string;
}

@Component({
    selector: 'about-qualifications',
    templateUrl: './about-qualifications.component.html',
    imports: []
})
export class AboutQualificationsComponent implements AfterViewInit {
    readonly qualifications: Qualification[] = qualificationsJson.qualifications;

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
