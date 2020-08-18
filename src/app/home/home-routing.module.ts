import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OnTheCinemaResolver } from './resolvers/on-the-cinema.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: { movie: OnTheCinemaResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
