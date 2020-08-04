import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchResultsResolver } from './resolvers/search-results.resolver';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieDetailsResolver } from './resolvers/movie-details.resolver';

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
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
