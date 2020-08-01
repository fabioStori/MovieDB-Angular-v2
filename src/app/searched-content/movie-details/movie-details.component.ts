import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnChanges {
  @Input() movieDetails = {};

  posterUrl: string = '';
  showRelatedMovies: boolean = false;
  showMovieInformation: boolean = false;
  relatedMovies = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  ngOnChanges() {

    this.http
      .get(
        `https://api.themoviedb.org/3/movie/${this.movieDetails['id']}?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d`
      )
      .subscribe((resp) => {
        if (resp) {
          console.log('Showing details');
          this.movieDetails = resp;
          this.posterUrl = `https://image.tmdb.org/t/p/w500/${resp['poster_path']}`;
        }
      });
  }

  movieFeature(feature:string){
    if (feature === 'similar-movies') {
      this.showRelatedMovies = !this.showRelatedMovies;
      this.showMovieInformation = false;
    } else if (feature === 'movie-information') {
      this.showRelatedMovies = false;
      this.showMovieInformation = !this.showMovieInformation;
    }
  }


}
