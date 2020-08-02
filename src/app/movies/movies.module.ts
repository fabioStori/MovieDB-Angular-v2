import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieInformationComponent } from './components/movie-information/movie-information.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { MovieSimilarComponent } from './components/movie-similar/movie-similar.component';

@NgModule({
  declarations: [MovieDetailsComponent, MovieInformationComponent, MoviePageComponent, MovieSimilarComponent],
  imports: [CommonModule],
  exports: [MovieDetailsComponent, MovieInformationComponent, MoviePageComponent, MovieSimilarComponent, CommonModule]
})
export class MoviesModule {}
