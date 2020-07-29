import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-searched-movie',
  templateUrl: './searched-movie.component.html',
  styleUrls: ['./searched-movie.component.css'],
})
export class SearchedMovieComponent implements OnInit, OnChanges {
  @Input() searchFeature: string = '';
  movies = [];
  pageTitle: string = '';
  showDetails: boolean = false;
  showResults: boolean = false;
  chosenMovie = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.searchFeature == 'popular-movies') {
      console.log('Searching popular movies');
      this.http
        .get(
          'https://api.themoviedb.org/3/discover/movie?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&sort_by=popularity.desc'
        )
        .subscribe((resp) => {
          if (resp) {
            console.log('Fetched popular movies');
            this.movies = resp['results'];
            this.pageTitle = 'Popular Movies:';
            this.showDetails = false;
            this.showResults = true;
          }
        });
    }
  }

  onDetailsClicked(details) {
    this.chosenMovie = details;
    this.showDetails = true;
  }
}
