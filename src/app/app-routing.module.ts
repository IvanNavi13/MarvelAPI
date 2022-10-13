import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { AuthGuard } from './services/guards/auth.guard';


const routes: Routes = [
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/modules/auth/auth.module').then(m => m.AuthModule),
  },
  // {
  //   path: 'characterMarvel',
  //   loadChildren: () => import('./components/modules/character/character.module').then(m => m.CharacterModule),
  //   canLoad: [AuthGuard],
  //   canActivate: [AuthGuard]
  // },
  {
    path: '',
    component: NotFoundComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
