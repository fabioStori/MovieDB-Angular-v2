import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchedContentComponent } from './components/searched-content/searched-content.component';

const routes: Routes = [
  { path: 'pop-movies', component: SearchedContentComponent },
  { path: 'search/:searchTitle', component: SearchedContentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
