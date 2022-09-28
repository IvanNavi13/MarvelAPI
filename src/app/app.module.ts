import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { FindComponent } from './components/modules/character/pages/find/find.component';
import { ListComponent } from './components/modules/character/pages/list/list.component';
import { LoginComponent } from './components/modules/auth/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FindComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
