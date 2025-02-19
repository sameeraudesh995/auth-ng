import {RouterModule, Routes} from '@angular/router';
import {WelcomePageComponent} from './components/welcome-page/welcome-page.component';
import {AuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {NgModule} from '@angular/core';
import {UserResolver} from './services/user.resolver';
import {LoadJobsComponent} from './components/dashboard/load-jobs/load-jobs.component';


const redirectToLogin = ()=> redirectUnauthorizedTo('/auth/sign-in');

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: "full"
  },
  {
    path: 'welcome',
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
    canActivate: [AuthGuard],
    data:{
      authGuardPipe: redirectToLogin
    },
    resolve: {
      user: UserResolver,
    }
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
