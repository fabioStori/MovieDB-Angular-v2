import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomePageResolver } from './resolvers/home-page.resolver';

@NgModule({
  declarations: [HomePageComponent, MoviePreviewComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [HomePageComponent, MoviePreviewComponent],
  providers: [HomePageResolver]
})
export class HomeModule {}
