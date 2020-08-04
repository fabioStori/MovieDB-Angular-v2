import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchResultsResolver } from './resolvers/search-results.resolver';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieDetailsResolver } from './resolvers/movie-details.resolver';
import { MovieInformationComponent } from './components/movie-information/movie-information.component';
import { MovieSimilarComponent } from './components/movie-similar/movie-similar.component';
import { MovieSimilarResolver } from './resolvers/movie-similar.resolver';
import { MoviePageResolver } from './resolvers/movie-page.resolver';
import { MoviePageComponent } from './components/movie-page/movie-page.component';

const routes: Routes = [
  {
    path: 'pop-movies',
    component: SearchResultsComponent,
    data: {
      routeName: 'Popular movies',
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
            resolve: { similarMovies: MovieSimilarResolver },
          },
        ],
      },
    ],
  },
  {
    path: 'search/:searchTitle',
    component: SearchResultsComponent,
    data: {
      routeName: 'Searched movies',
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
            resolve: { similarMovies: MovieSimilarResolver },
          },
        ],
      },
    ],
  },
  {
    path: 'movie-page/:id',
    component: MoviePageComponent,
    resolve: { movie: MoviePageResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
