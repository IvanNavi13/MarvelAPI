import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { FindComponent } from './pages/find/find.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'startWith',
        component: FindComponent
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
