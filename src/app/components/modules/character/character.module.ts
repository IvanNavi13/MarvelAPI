import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from './character-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OnlyComponent } from './pages/only/only.component';
import { DashboardModule } from '../dashboard/dashboard.module';



@NgModule({
  declarations: [
    OnlyComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CharacterModule { }
