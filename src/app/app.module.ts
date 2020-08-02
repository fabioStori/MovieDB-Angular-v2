import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchedContentComponent } from './searched-content/searched-content.component';
import { MovieDetailsComponent } from './searched-content/movie-details/movie-details.component';
import { MovieSimilarComponent } from './searched-content/movie-details/movie-similar/movie-similar.component';
import { MovieInformationComponent } from './searched-content/movie-details/movie-information/movie-information.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';

const appRoutes: Routes = [
  { path: '', component: HomeModule },
  { path: 'pop-movies', component: SearchedContentComponent },
  { path: 'search/:searchTitle', component: SearchedContentComponent },
  { path: 'movie-page', component: MoviePageComponent },
];

@NgModule({
  imports: [
    HomeModule,
    LayoutModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    SearchedContentComponent,
    MovieDetailsComponent,
    MovieSimilarComponent,
    MovieInformationComponent,
    MoviePageComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
