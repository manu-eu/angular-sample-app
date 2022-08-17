import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'

import { AppRouterModule } from './app-router/app-router.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { SearchComponent } from '@components/search/search.component';
import { ResultsComponent } from '@components/results/results.component';
import { ProjectsPageComponent } from '@pages/projects-page/projects-page.component';
import { GoToProjectsPageComponent } from './pages/go-to-projects-page/go-to-projects-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ResultsComponent,
    ProjectsPageComponent,
    GoToProjectsPageComponent,
  ],
  imports: [
    BrowserModule, AppRouterModule, BrowserAnimationsModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
