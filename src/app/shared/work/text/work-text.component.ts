import { AfterViewInit, Component, Input } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
    selector: 'work-text',
    templateUrl: './work-text.component.html',
    imports: []
})
export class WorkTextComponent implements AfterViewInit {
    @Input() text!: string;

    public ngAfterViewInit(): void {
        gsap.fromTo(
            '.work-text__container',
            { opacity: 0, y: 3 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.75,
                ease: 'power2.inOut'
            }
        );
    }
}
