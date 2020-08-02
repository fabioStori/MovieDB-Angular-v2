import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnInit {
  movies = [];
  pageTitle: string = '';
  showDetails: boolean = false;
  showResults: boolean = false;
  chosenMovie = {};

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private search: SearchService
  ) {}

  ngOnInit(): void {
    switch (this.route['url']['_value']['0']['path']) {
      case 'pop-movies': {
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
        break;
      }
      default: {
        if (this.route.snapshot.params['searchTitle'] !== '') {
          console.log('Searching movie');
          this.http
            .get(
              `https://api.themoviedb.org/3/search/movie?&api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&query=${this.route.snapshot.params['searchTitle']}`
            )
            .subscribe((resp) => {
              if (resp) {
                console.log('Fetched search');
                this.movies = resp['results'];
                this.pageTitle =
                  'Showing results for: ' +
                  this.route.snapshot.params['searchTitle'];
                this.showDetails = false;
                this.showResults = true;
              }
            });
          this.route.params.subscribe((params: Params) => {
            this.http
              .get(
                `https://api.themoviedb.org/3/search/movie?&api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&query=${this.route.snapshot.params['searchTitle']}`
              )
              .subscribe((resp) => {
                if (resp) {
                  console.log('Fetched search');
                  this.movies = resp['results'];
                  this.pageTitle =
                    'Showing results for: ' +
                    this.route.snapshot.params['searchTitle'];
                  this.showDetails = false;
                  this.showResults = true;
                }
              });
          });
        } else this.pageTitle = 'No results found.';
      }
    }
  }

  onDetailsClicked(details) {
    this.search.onMovieDetailsClicked(details);
    // console.log(details)
    this.showDetails = true;
  }
}
