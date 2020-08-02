import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomePageComponent]
})
export class HomeModule {}
