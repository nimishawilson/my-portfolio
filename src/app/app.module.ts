import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ​ BrowserAnimationsModule​ } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { ResumeComponent } from './resume/resume.component';
import { SharedModule } from './shared/shared.module';
import { SkillsetAndWorksComponent } from './skillset-and-works/skillset-and-works.component';
import { ProjectsComponent } from './skillset-and-works/projects/projects.component';
import { ProjectCardComponent } from './skillset-and-works/projects/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ResumeComponent,
    SkillsetAndWorksComponent,
    ProjectsComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
