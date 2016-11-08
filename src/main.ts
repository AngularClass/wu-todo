import 'core-js';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, enableProdMode } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app-header.component';
import { ToDoCardComponent } from './todo-card.component';
import { WuInputComponent } from './wu-input.component';
import { ToDoService } from './todo.service';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule, // this includes ApplicationModule, CommonModule, and any Platform services.
    HttpModule,
    // RouterModule,
    FormsModule // form directives
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoCardComponent,
    WuInputComponent
  ],
  providers: [
    ToDoService
  ]
})
export class MainModule {

}

platformBrowserDynamic().bootstrapModule(MainModule);
