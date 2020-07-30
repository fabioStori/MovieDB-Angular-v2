import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router"

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchedMovieComponent } from './searched-movie/searched-movie.component';
import { MovieDetailsComponent } from './searched-movie/movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { MovieSimilarComponent } from './searched-movie/movie-details/movie-similar/movie-similar.component';
import { MovieInformationComponent } from './searched-movie/movie-details/movie-information/movie-information.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'pop-movies', component: SearchedMovieComponent},
  {path: 'movie-page', component: MoviePageComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchedMovieComponent,
    MovieDetailsComponent,
    FooterComponent,
    MovieSimilarComponent,
    MovieInformationComponent,
    MoviePageComponent,

  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
