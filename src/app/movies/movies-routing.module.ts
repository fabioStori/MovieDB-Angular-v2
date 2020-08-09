import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { PopMoviesComponent } from './components/pop-movies/pop-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieInformationComponent } from './components/movie-information/movie-information.component';
import { MovieSimilarComponent } from './components/movie-similar/movie-similar.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';

import { SearchResultsResolver } from './resolvers/search-results.resolver';
import { PopMoviesResolver } from './resolvers/pop-movies.resolver';
import { MovieDetailsResolver } from './resolvers/movie-details.resolver';
import { MovieSimilarResolver } from './resolvers/movie-similar.resolver';
import { MoviePageResolver } from './resolvers/movie-page.resolver';

const routes: Routes = [
  {
    path: 'pop-movies',
    component: PopMoviesComponent,
    data: {
      routeName: 'Popular movies'
    },
    resolve: { movies: PopMoviesResolver },
    children: [
      {
        path: ':id',
        component: MovieDetailsComponent,
        resolve: { movie: MovieDetailsResolver },
        children: [
          { path: 'info', component: MovieInformationComponent },
          {
            path: 'similar',
            component: MovieSimilarComponent,
            resolve: { similarMovies: MovieSimilarResolver }
          }
        ]
      },
      {
        path: ':page',
        component: PopMoviesComponent,
        resolve: { movie: MovieDetailsResolver }
      }
    ]
  },
  {
    path: 'search/:searchTitle',
    component: SearchResultsComponent,
    data: {
      routeName: 'Searched movies'
    },
    resolve: { movies: SearchResultsResolver },
    children: [
      {
        path: ':id',
        component: MovieDetailsComponent,
        resolve: { movie: MovieDetailsResolver },
        children: [
          { path: 'info', component: MovieInformationComponent },
          {
            path: 'similar',
            component: MovieSimilarComponent,
            resolve: { similarMovies: MovieSimilarResolver }
          }
        ]
      },
      {
        path: ':page',
        component: SearchResultsComponent,
        resolve: { movie: MovieDetailsResolver }
      }
    ]
  },
  {
    path: 'movie-page/:id',
    component: MoviePageComponent,
    resolve: { movie: MoviePageResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
