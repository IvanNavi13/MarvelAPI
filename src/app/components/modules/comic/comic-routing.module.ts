import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { FindNameComponent } from './pages/find-name/find-name.component';
import { FindFormatComponent } from './pages/find-format/find-format.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'formatName',
        component: FindFormatComponent
      },
      {
        path: 'titleName',
        component: FindNameComponent
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
export class ComicRoutingModule { }
