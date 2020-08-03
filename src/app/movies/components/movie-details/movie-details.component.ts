import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
})
export class MovieDetailsComponent implements OnInit {
  movieDetails = {};
  posterUrl: string = '';
  showRelatedMovies: boolean = false;
  showMovieInformation: boolean = false;
  relatedMovies = {};

  constructor(private search: SearchService) {}

  ngOnInit(): void {
    //need to find a way to only show the data after the movieDetails is fetched and ready
    this.movieDetails = this.search.getMovieDetails();
    this.showRelatedMovies = false;
    this.showMovieInformation = false;
    this.posterUrl = `https://image.tmdb.org/t/p/w500/${this.movieDetails['poster_path']}`;

    this.search.clickedMovieDetails.subscribe((details) => {
      this.movieDetails = details;
      this.showRelatedMovies = false;
      this.showMovieInformation = false;
      this.posterUrl = `https://image.tmdb.org/t/p/w500/${details['poster_path']}`;
    });
  }

  movieFeature(feature: string) {
    if (feature === 'similar-movies') {
      this.showRelatedMovies = !this.showRelatedMovies;
      this.showMovieInformation = false;
    } else if (feature === 'movie-information') {
      this.showRelatedMovies = false;
      this.showMovieInformation = !this.showMovieInformation;
    }
  }
}
