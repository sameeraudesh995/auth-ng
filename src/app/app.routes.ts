import { Routes } from '@angular/router';
import {WelcomePageComponent} from './components/welcome-page/welcome-page.component';

export const routes: Routes = [

  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module')
      .then(m => m.AuthModule),
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module')
      .then(m => m.DashboardModule),
  }
];
