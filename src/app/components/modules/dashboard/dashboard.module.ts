import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavigationMenuComponent } from './pages/navigation-menu/navigation-menu.component';
import { MaterialModule } from '../../shared/material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    NavigationMenuComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  // exports:[
  //   NavigationMenuComponent
  // ]
})
export class DashboardModule { }
