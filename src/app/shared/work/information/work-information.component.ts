import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    QueryList,
    ViewChildren
} from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
    selector: 'work-information',
    templateUrl: './work-information.component.html',
    styleUrl: './work-information.component.css',
    imports: []
})
export class WorkInformationComponent implements AfterViewInit {
    @Input() projectName!: string;
    @Input() clientName!: string;
    @Input() projectDate!: string;
    @Input() roleName!: string;
    @Input() projectUrl!: string;
    @ViewChildren('dateItem') dateItems!: QueryList<ElementRef<HTMLDivElement>>;

    ngAfterViewInit(): void {
        const headline = document.querySelector('.work-information__header');
        if (headline) {
            gsap.fromTo(
                headline,
                { y: 2, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,

                    ease: 'power1.in'
                }
            );
        }

        const dateElements = this.dateItems
            .toArray()
            .map((item) => item.nativeElement);
        if (dateElements.length) {
            gsap.fromTo(
                dateElements,
                { y: 5, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                    stagger: 0.15,
                    delay: 0.25
                }
            );
        }
    }
}
