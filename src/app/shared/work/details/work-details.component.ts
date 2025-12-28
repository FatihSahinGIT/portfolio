import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
    selector: 'work-details',
    templateUrl: './work-details.component.html',
    styleUrl: './work-details.component.css'
})
export class WorkDetailsComponent implements AfterViewInit {
    @Input() headline!: string;
    @Input() text!: string;
    @ViewChild('container', { static: true }) container!: ElementRef<HTMLElement>;

    public ngAfterViewInit(): void {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            this.container.nativeElement,
            {
                opacity: 0,
                y: 5
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: this.container.nativeElement,
                    start: 'top 0%',
                    toggleActions: 'play reverse play reverse'
                }
            }
        );
    }
}
