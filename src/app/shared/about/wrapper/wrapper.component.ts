import { Component } from '@angular/core';
import { AboutHeadlineComponent } from "../about-headline/about-headline.component";
import { AboutQualificationsComponent } from "../about-qualifications/about-qualifications.component";
import { AboutTextComponent } from "../about-text/about-text.component";
import { AboutCompetenciesComponent } from "../about-competencies/about-competencies.component";
import { AboutExperienceComponent } from "../about-experience/about-experiecne.component";

@Component({
    selector: 'wrapper',
    templateUrl: './wrapper.component.html',
    imports: [AboutHeadlineComponent, AboutQualificationsComponent, AboutTextComponent, AboutCompetenciesComponent, AboutExperienceComponent]
})
export class WrapperComponent {}
