import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';

import { WorkOverviewComponent } from '../../work/overview/work-overview.component';

@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  imports: [HeadlineComponent, WorkOverviewComponent],
})
export class WrapperComponent {}
