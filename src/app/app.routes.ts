import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';

export const ROUTE_PATHS = {
    root: '/',
    about: '/about',
    work: (workName: string = ':workName') => `/work/${workName}`
} as const;

export const routes: Routes = [
    { path: '', component: LandingComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    {
        path: 'work/:workName',
        loadComponent: () =>
            import('./single-work/single-work.component').then(
                (m) => m.SingleWorkComponent
            )
    }
];
