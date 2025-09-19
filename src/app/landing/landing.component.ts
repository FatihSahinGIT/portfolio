import { Component } from '@angular/core';

import { IntroductionComponent } from '../introduction/introduction.component';
import { SelectedWorksComponent } from '../selected-works/selected-works.component';

@Component({
    selector: 'app-landing',
    imports: [IntroductionComponent, SelectedWorksComponent],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css'
})
export class LandingComponent {}
