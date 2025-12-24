import { Component } from '@angular/core';
import { WorkInformationComponent } from '../information/work-information.component';
import { WorkImagesComponent } from '../images/work-images.component';
import { WorkTextComponent } from '../text/work-text.component';
import { WorkDetailsComponent } from '../details/work-details.component';

@Component({
    selector: 'work-wrapper',
    templateUrl: './work-wrapper.component.html',
    imports: [
        WorkInformationComponent,
        WorkImagesComponent,
        WorkTextComponent,
        WorkDetailsComponent,
    ]
})
export class WorkWrapperComponent {
    public readonly lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}
