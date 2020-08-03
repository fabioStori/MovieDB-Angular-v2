import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchResultsResolver } from './resolvers/search-results.resolver';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: 'pop-movies',
    component: SearchResultsComponent,
    data: {
      routeName: 'Popular movies',
    },
    resolve: { movies: SearchResultsResolver },
    children: [
      {path: ':id', component: MovieDetailsComponent}
    ]
  },
  {
    path: 'search/:searchTitle',
    component: SearchResultsComponent,
    data: {
      routeName: 'Searched movies',
    },
    resolve: { movies: SearchResultsResolver },
    children: [
      {path: ':id', component: MovieDetailsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
