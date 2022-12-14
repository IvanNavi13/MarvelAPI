import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicRoutingModule } from './comic-routing.module';
import { ListComponent } from './pages/list/list.component';
import { FindNameComponent } from './pages/find-name/find-name.component';
import { FindFormatComponent } from './pages/find-format/find-format.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';


@NgModule({
  declarations: [
    ListComponent,
    FindNameComponent,
    FindFormatComponent
  ],
  imports: [
    CommonModule,
    ComicRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ComicModule { }
