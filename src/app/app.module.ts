import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormpartComponent } from './formpart/formpart.component';
import { BottompartComponent } from './bottompart/bottompart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormpartComponent,
    BottompartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
