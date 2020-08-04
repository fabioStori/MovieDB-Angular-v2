import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { ActivatedRoute, Data } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private search: SearchService) {}

  ngOnInit(): void {
    //need to find a way to show the data only after the movieDetails is fetched and ready

    this.route.data.subscribe((data: Data) => {
      this.movieDetails = data['movie'];
      this.showRelatedMovies = false;
      this.showMovieInformation = false;
      this.posterUrl = `https://image.tmdb.org/t/p/w500/${data['movie']['poster_path']}`;
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
