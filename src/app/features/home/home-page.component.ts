import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';

import { ProjectListComponent } from '../projects/project-list/project-list.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  imports: [HeroComponent, ProjectListComponent],
})
export class HomePageComponent {}
