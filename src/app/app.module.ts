import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    MoviesModule,
    HomeModule,
    LayoutModule,
    SharedModule,

    BrowserModule,
    FormsModule,

    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
