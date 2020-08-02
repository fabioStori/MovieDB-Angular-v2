import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-similar',
  templateUrl: './movie-similar.component.html',
})
export class MovieSimilarComponent implements OnInit, OnChanges {
  @Input() similarMovies = {};
  posterUrl = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.http
      .get(
        `https://api.themoviedb.org/3/movie/${this.similarMovies['id']}/similar?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&language=en-US&page=1`
      )
      .subscribe((resp) => {
        if (resp) {
          console.log('Showing similar movies');
          this.similarMovies = resp['results'];
          this.posterUrl[0] = `https://image.tmdb.org/t/p/w500/${resp['results'][0]['poster_path']}`;
          this.posterUrl[1] = `https://image.tmdb.org/t/p/w500/${resp['results'][1]['poster_path']}`;
        }
      });
  }
}
