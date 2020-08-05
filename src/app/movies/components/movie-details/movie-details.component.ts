import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router) {}

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
      this.router.navigate(['similar'],  {relativeTo: this.route})
    } else if (feature === 'movie-information') {
      this.router.navigate(['info'],  {relativeTo: this.route})
    }
  }
}
