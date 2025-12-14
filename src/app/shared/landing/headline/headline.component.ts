import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
    selector: 'headline',
    templateUrl: './headline.component.html',
    styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit, AfterViewInit {
    public headlineText: string = 'Hello';

    ngOnInit(): void {
        this.generateHeadline();
    }

    ngAfterViewInit(): void {
        const headlineEl = document.querySelector('.headline-animated');
        if (headlineEl) {
            gsap.fromTo(
                headlineEl,
                { y: 3, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.75,
                    stagger: 0.0125,
                    ease: 'power1.in'
                }
            );
        }

        const subheadlineEl = document.querySelector('.subheadline-animated');
        if (subheadlineEl) {
            gsap.fromTo(
                subheadlineEl,
                { y: 5, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.5,
                    ease: 'power1.out'
                }
            );
        }

        const headlineSeperatorEl = document.querySelector(
            '.headline__seperator'
        );
        if (headlineSeperatorEl) {
            gsap.fromTo(
                headlineSeperatorEl,
                { width: 0, opacity: 0.2 },
                {
                    width: '100%',
                    opacity: 1,
                    duration: 1.5,
                    delay: 0.5,
                    ease: 'power2.out'
                }
            );
        }
    }

    private generateHeadline(): void {
        const h = new Date().getHours();
        this.headlineText =
            h < 12
                ? 'Good Morning'
                : h < 18
                  ? 'Good Afternoon'
                  : 'Good Evening';
    }
}
