import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchResultsResolver } from './resolver/search-results.resolver';

const routes: Routes = [
  {
    path: 'pop-movies',
    component: SearchResultsComponent,
    data: {
      routeName: 'Popular movies',
    },
    resolve: { movies: SearchResultsResolver },
  },
  {
    path: 'search/:searchTitle',
    component: SearchResultsComponent,
    data: {
      routeName: 'Searched movies',
    },
    resolve: { movies: SearchResultsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
