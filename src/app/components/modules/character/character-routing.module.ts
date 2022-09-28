import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { FindComponent } from './pages/find/find.component';
import { OnlyComponent } from './pages/only/only.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'startWith',
        component: FindComponent
      },
      {
        path: 'fullName',
        component: OnlyComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: '',
        component: ListComponent,
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
