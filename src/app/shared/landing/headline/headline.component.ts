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

    // TODO Fade In GSAP Animation

    ngAfterViewInit(): void {
        // simple fade-in from bottom with a stagger between h1 and h2
        const els = Array.from(
            document.querySelectorAll('.headline-title, .headline-sub')
        ) as HTMLElement[];
        if (els.length) {
            gsap.from(els, {
                y: 12,
                opacity: 0,
                stagger: 0.12,
                duration: 0.55,
                ease: 'power2.out'
            });
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
