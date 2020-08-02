import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule],
  exports: [HomePageComponent, CommonModule]
})
export class HomeModule {}
