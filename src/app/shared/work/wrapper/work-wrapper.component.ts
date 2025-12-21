import { Component } from '@angular/core';
import { WorkInformationComponent } from "../information/work-information.component";
import { WorkImagesComponent } from "../images/work-images.component";
import { WorkTextComponent } from "../text/work-text.component";
import { WorkTaskComponent } from "../task/work-task.component";
import { WorkOutcomeComponent } from "../outcome/work-outcome.component";

@Component({
    selector: 'work-wrapper',
    templateUrl: './work-wrapper.component.html',
    imports: [WorkInformationComponent, WorkImagesComponent, WorkTextComponent, WorkTaskComponent, WorkOutcomeComponent]
})
export class WorkWrapperComponent {}
