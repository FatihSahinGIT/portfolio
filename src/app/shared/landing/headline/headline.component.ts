import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
    selector: 'headline',
    templateUrl: './headline.component.html',
    styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit, AfterViewInit {
    public headlineText: string = 'Hello';
    public headlineLetters: string[] = [];

    ngOnInit(): void {
        this.generateHeadline();
        this.headlineLetters = this.headlineText.split('');
    }

    ngAfterViewInit(): void {
        const headlineEl = document.querySelector('.headline-animated');
        if (headlineEl) {
            const letters = headlineEl.querySelectorAll('.letter');
            gsap.fromTo(
                letters,
                { y: 5, opacity: 0.0125 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.75,
                    stagger: 0.0125,
                    ease: 'power1.in'
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
