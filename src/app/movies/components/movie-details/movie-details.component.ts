import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient, private search: SearchService) {}

  ngOnInit(): void {

    this.search.clickedMovieDetails
      .subscribe((details) => {
        console.log(details)
        this.movieDetails = details;
        this.posterUrl = `https://image.tmdb.org/t/p/w500/${details['poster_path']}`;
      })
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
