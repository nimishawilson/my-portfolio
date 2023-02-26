import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevButtonComponent } from './components/prev-button/prev-button.component';
import { InitialLoadingComponent } from './components/initial-loading/initial-loading.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';

const components = [
  PrevButtonComponent,
  InitialLoadingComponent,
  PageNotFoundComponent,
];

@NgModule({
  declarations: [
   ...components
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
