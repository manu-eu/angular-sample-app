import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoToProjectsPageComponent } from '@pages/go-to-projects-page/go-to-projects-page.component';
import { ProjectsPageComponent } from '@pages/projects-page/projects-page.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsPageComponent },
  { path: '**', component: GoToProjectsPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
