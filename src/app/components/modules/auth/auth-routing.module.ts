import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from '../../../services/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./../dashboard/dashboard.module').then(m => m.DashboardModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
