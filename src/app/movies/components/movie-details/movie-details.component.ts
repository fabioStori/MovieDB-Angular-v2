import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html'
})
export class MovieDetailsComponent implements OnInit {
  movieDetails = {};
  posterUrl = '';
  showRelatedMovies = false;
  showMovieInformation = false;
  relatedMovies = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      console.log(data);
      this.movieDetails = data['movie'];
      this.showRelatedMovies = false;
      this.showMovieInformation = false;
      this.posterUrl = `https://image.tmdb.org/t/p/w500/${data['movie']['poster_path']}`;
    });
  }
}
