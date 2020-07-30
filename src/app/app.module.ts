import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router"

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchedContentComponent } from './searched-content/searched-content.component';
import { MovieDetailsComponent } from './searched-content/movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { MovieSimilarComponent } from './searched-content/movie-details/movie-similar/movie-similar.component';
import { MovieInformationComponent } from './searched-content/movie-details/movie-information/movie-information.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'pop-movies', component: SearchedContentComponent},
  {path: 'search/:searchTitle', component: SearchedContentComponent},
  {path: 'movie-page', component: MoviePageComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchedContentComponent,
    MovieDetailsComponent,
    FooterComponent,
    MovieSimilarComponent,
    MovieInformationComponent,
    MoviePageComponent,
    HomePageComponent,

  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
