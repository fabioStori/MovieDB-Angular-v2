import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';
import { SearchModule } from './search/search.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
const appRoutes: Routes = [
  // { path: '', component: HomeModule },
  { path: 'pop-movies', component: MoviesModule },
  { path: 'search/:searchTitle', component: MoviesModule },
  // { path: 'movie-page', component: MoviePageComponent },
];

@NgModule({
  imports: [
    MoviesModule,
    HomeModule,
    LayoutModule,
    SearchModule,
    SharedModule,

    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
