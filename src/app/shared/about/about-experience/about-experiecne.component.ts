import { AfterViewInit, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap/gsap-core';


@Component({
    selector: 'about-experience',
    templateUrl: './about-experience.component.html',
    imports: []
})
export class AboutExperienceComponent implements AfterViewInit {
    readonly #router: Router = inject(Router);

    ngAfterViewInit(): void {
        gsap.from('.about-experience', {
            duration: 1,
            y: 5,
            opacity: 0,
            delay: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about-experience',
                start: 'top 100%',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse',
                once: false
            }
        });
    }

    public async navigateToProject(event: Event, project: string): Promise<void> {
        event.preventDefault();

        if (this.#router.url === "/work/" + project) {
            return;
        }

        this.#router.navigateByUrl("/work/" + project);
    }
}
