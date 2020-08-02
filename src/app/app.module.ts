import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchedContentComponent } from './searched-content/searched-content.component';

import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';

import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home/components/home-page/home-page.component';

const appRoutes: Routes = [
  // { path: '', component: HomeModule },
  { path: 'pop-movies', component: SearchedContentComponent },
  { path: 'search/:searchTitle', component: SearchedContentComponent },
  // { path: 'movie-page', component: MoviePageComponent },
];

@NgModule({
  imports: [
    MoviesModule,
    HomeModule,
    LayoutModule,

    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
  ],
  declarations: [AppComponent, SearchedContentComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
