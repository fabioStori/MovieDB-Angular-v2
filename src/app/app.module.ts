import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchedMovieComponent } from './searched-movie/searched-movie.component';
import { MovieDetailsComponent } from './searched-movie/movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { MovieSimilarComponent } from './searched-movie/movie-details/movie-similar/movie-similar.component';
import { MovieInformationComponent } from './searched-movie/movie-details/movie-information/movie-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchedMovieComponent,
    MovieDetailsComponent,
    FooterComponent,
    MovieSimilarComponent,
    MovieInformationComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
