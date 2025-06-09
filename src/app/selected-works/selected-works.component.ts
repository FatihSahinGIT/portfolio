import { Component } from '@angular/core';
import * as PROJECT_DATA from './projects.json';

@Component({
  selector: 'app-selected-works',
  imports: [],
  templateUrl: './selected-works.component.html',
  styleUrl: './selected-works.component.css',
})
export class SelectedWorksComponent {
  public projects = (PROJECT_DATA as any).default;
}
