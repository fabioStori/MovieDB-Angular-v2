import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';

import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { OnTheCinemaComponent } from './components/on-the-cinema/on-the-cinema.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OnTheCinemaResolver } from './resolvers/on-the-cinema.resolver';

@NgModule({
  declarations: [
    HomePageComponent,
    MoviePreviewComponent,
    OnTheCinemaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    InlineSVGModule.forRoot()
  ],
  exports: [HomePageComponent, MoviePreviewComponent, OnTheCinemaComponent],
  providers: [OnTheCinemaResolver]
})
export class HomeModule {}
