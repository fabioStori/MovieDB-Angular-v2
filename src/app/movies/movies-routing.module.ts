import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
  {
    path: 'pop-movies',
    component: SearchResultsComponent,
    data: {
      routeName: 'Popular movies',
    },
  },
  {
    path: 'search/:searchTitle',
    component: SearchResultsComponent,
    data: {
      routeName: 'Searched movie',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
