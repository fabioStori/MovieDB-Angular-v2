import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieInformationComponent } from './components/movie-information/movie-information.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { MovieSimilarComponent } from './components/movie-similar/movie-similar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MoviesRoutingModule } from './movies-routing.module';


@NgModule({
  declarations: [MovieDetailsComponent, MovieInformationComponent, MoviePageComponent, MovieSimilarComponent, SearchResultsComponent],
  imports: [CommonModule, MoviesRoutingModule],
  exports: [MovieDetailsComponent, MovieInformationComponent, MoviePageComponent, MovieSimilarComponent, SearchResultsComponent, CommonModule]
})
export class MoviesModule {}
