import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieInformationComponent } from './components/movie-information/movie-information.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { MovieSimilarComponent } from './components/movie-similar/movie-similar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { PopMoviesComponent } from './components/pop-movies/pop-movies.component';

import { MoviesRoutingModule } from './movies-routing.module';
import { SearchResultsResolver } from './resolvers/search-results.resolver';
import { MoviePageResolver } from './resolvers/movie-page.resolver';
import { MovieSimilarResolver } from './resolvers/movie-similar.resolver';
import { MovieDetailsResolver } from './resolvers/movie-details.resolver';
import { PopMoviesResolver } from './resolvers/pop-movies.resolver';

const moviesComponents = [
  MovieDetailsComponent,
  MovieInformationComponent,
  MoviePageComponent,
  MovieSimilarComponent,
  SearchResultsComponent,
  PopMoviesComponent
];

const providers = [
  SearchResultsResolver,
  MoviePageResolver,
  MovieSimilarResolver,
  MovieDetailsResolver,
  PopMoviesResolver
];

@NgModule({
  declarations: [...moviesComponents],
  imports: [MoviesRoutingModule, CommonModule],
  exports: [...moviesComponents],
  providers: [...providers]
})
export class MoviesModule {}
