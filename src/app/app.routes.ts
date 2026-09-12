import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home - Fatih Sahin',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about-page.component').then((m) => m.AboutPageComponent),
    title: 'About - Fatih Sahin',
  },
  {
    path: 'work/:project',
    loadComponent: () =>
      import('./features/projects/project-detail/project-detail-page.component').then(
        (m) => m.ProjectDetailPageComponent
      ),
    title: 'Project - Fatih Sahin',
  },
  {
    path: 'work',
    loadComponent: () =>
      import('./features/projects/project-list/project-list.component').then(
        (m) => m.ProjectListComponent
      ),
    title: 'Work - Fatih Sahin',
  },
];
