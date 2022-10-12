import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from '../../../services/guards/auth.guard';
import { NavigationMenuComponent } from './pages/navigation-menu/navigation-menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'characterMarvel',
        loadChildren: () => import('./../character/character.module').then(m => m.CharacterModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
      },
      // {    COMICS
      //   path: 'comicsMarvel',
      //   loadChildren: () => import('./../character/character.module').then(m => m.CharacterModule),
      //   canLoad: [AuthGuard],
      //   canActivate: [AuthGuard]
      // },
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
export class DashboardRoutingModule { }
