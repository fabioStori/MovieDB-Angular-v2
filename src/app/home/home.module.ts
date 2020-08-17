import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';

import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { MovieSlideComponent } from './components/movie-slide/movie-slide.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomePageResolver } from './resolvers/home-page.resolver';

@NgModule({
  declarations: [HomePageComponent, MoviePreviewComponent, MovieSlideComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    InlineSVGModule.forRoot()
  ],
  exports: [HomePageComponent, MoviePreviewComponent, MovieSlideComponent],
  providers: [HomePageResolver]
})
export class HomeModule {}
