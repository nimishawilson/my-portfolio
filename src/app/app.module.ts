import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ​ BrowserAnimationsModule​ } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialLoadingComponent } from './initial-loading/initial-loading.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialLoadingComponent,
    HomeComponent,
    NavComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule​,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
