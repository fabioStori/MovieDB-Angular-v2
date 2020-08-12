import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomePageComponent, MoviePreviewComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomePageComponent, MoviePreviewComponent]
})
export class HomeModule {}
