import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsetAndWorksComponent } from './skillset-and-works/skillset-and-works.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'skills-projects', component: SkillsetAndWorksComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
