import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { SelectedWorkComponent } from "../selected-work/selected-work.component";

@Component({
    selector: 'wrapper',
    templateUrl: './wrapper.component.html',
    imports: [HeadlineComponent, SelectedWorkComponent]
})
export class WrapperComponent {}
