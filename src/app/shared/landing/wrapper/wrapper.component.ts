import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';

@Component({
    selector: 'wrapper',
    templateUrl: './wrapper.component.html',
    imports: [HeadlineComponent]
})
export class WrapperComponent {}
