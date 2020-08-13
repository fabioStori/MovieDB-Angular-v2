import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomePageResolver } from './resolvers/home-page.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: { movie: HomePageResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
