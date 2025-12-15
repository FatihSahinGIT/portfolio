import { Routes } from '@angular/router';
import { WrapperComponent } from './shared/landing/wrapper/wrapper.component';

export const routes: Routes = [
    {
        path: '',
        component: WrapperComponent,
        title: 'Home - Fatih Sahin',
    },
    {
        path: 'about',
        loadComponent: () => import('./shared/about/wrapper/wrapper.component').then(m => m.WrapperComponent),
        title: 'About - Fatih Sahin',
    }
];


