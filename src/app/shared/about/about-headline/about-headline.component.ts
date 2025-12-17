import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
    selector: 'about-headline',
    templateUrl: './about-headline.component.html',
    imports: []
})
export class AboutHeadlineComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        gsap.from('.about-headline', {
            duration: 1,
            y: 10,
            opacity: 0,
            ease: 'power2.out'
        });
    }
}
