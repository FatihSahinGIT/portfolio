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
import { ROUTE_PATHS } from '../app.routes';
import { TransitionService } from '../shared/services/transition.service';

@Component({
    selector: 'app-selected-works',
    imports: [NgIcon],
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
    readonly #transitionService: TransitionService = inject(TransitionService);

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
        const box = this.scrollContainer.nativeElement.querySelector('.box') as HTMLElement;
        const scrollAmount = box ? box.offsetWidth + 12 : 200; // 24px = space-x-6
        this.scrollContainer.nativeElement.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }

    public scrollRight(): void {
        const box = this.scrollContainer.nativeElement.querySelector('.box') as HTMLElement;
        const scrollAmount = box ? box.offsetWidth + 80 : 200; // 24px = space-x-6
        this.scrollContainer.nativeElement.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    public redirectToWork(projectCompany: string): void {
        this.#transitionService.transitionAndNavigate(ROUTE_PATHS.work(projectCompany));
    }
}
