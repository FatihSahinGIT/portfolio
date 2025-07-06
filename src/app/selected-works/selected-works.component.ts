import {
    AfterViewInit,
    Component,
    ElementRef,
    inject,
    ViewChild
} from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapAlarm, bootstrapApp } from '@ng-icons/bootstrap-icons';
import { gsap } from 'gsap/gsap-core';
import * as PROJECT_DATA from './projects.json';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-selected-works',
    imports: [NgIcon, NgOptimizedImage],
    providers: [provideIcons({ bootstrapAlarm, bootstrapApp })],
    templateUrl: './selected-works.component.html',
    styleUrl: './selected-works.component.css'
})
export class SelectedWorksComponent implements AfterViewInit {
    @ViewChild('scrollContainer', { static: false })
    scrollContainer!: ElementRef<HTMLDivElement>;
    @ViewChild('selectedWorks', { static: false })
    selectedWorks!: ElementRef<HTMLElement>;

    readonly #el: ElementRef = inject(ElementRef);

    public projects = (PROJECT_DATA as any).default;

    ngAfterViewInit(): void {
        gsap.from(this.selectedWorks.nativeElement, {
            opacity: 0,
            y: 10,
            delay: 2.5,
            duration: 1,
            ease: 'power2.out'
        });
    }

    public scrollLeft(): void {
        this.scrollContainer.nativeElement.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    }

    public scrollRight(): void {
        this.scrollContainer.nativeElement.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    }
}
