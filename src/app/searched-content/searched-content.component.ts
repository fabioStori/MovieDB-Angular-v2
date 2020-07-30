import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searched-content',
  templateUrl: './searched-content.component.html',
  styleUrls: ['./searched-content.component.css'],
})
export class SearchedContentComponent implements OnInit, OnChanges {
  @Input() searchFeature = {};
  movies = [];
  pageTitle: string = '';
  showDetails: boolean = false;
  showResults: boolean = false;
  chosenMovie = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
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

  ngOnChanges() {
    switch (this.searchFeature['feature']) {
      case 'home': {
        console.log('Back to home :)');
        break;
      }
      case 'popular-movies': {
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
            }
          });
        break;
      }
      case 'search-title': {
        this.http
          .get(
            `https://api.themoviedb.org/3/search/movie?&api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&query=${this.searchFeature['searchedTitle']}`
          )
          .subscribe((resp) => {
            if (resp) {
              console.log('Fetched search');
              this.movies = resp['results'];
              this.pageTitle =
                'Showing results for: ' + this.searchFeature['searchedTitle'];
            }
          });
        break;
      }
    }
  }

  onDetailsClicked(details) {
    this.chosenMovie = details;
    this.showDetails = true;
  }
}
