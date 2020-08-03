import { Component, OnInit} from '@angular/core';
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
  routeSnapshot = this.route.snapshot.params['searchTitle'];

  constructor(
    private route: ActivatedRoute,
    private search: SearchService
  ) {}

  ngOnInit(): void {
    switch (this.route['url']['_value']['0']['path']) {
      case 'pop-movies': {
        this.search.searchPopMovies().then((searchResults) => {
          this.refreshSearchResults(searchResults, 'pop-movies');
        });
        break;
      }
      default: {
        if (this.routeSnapshot !== '') {
          this.search
            .searchMovieByTitle(this.routeSnapshot)
            .then((searchResults) => {
              this.refreshSearchResults(searchResults, 'title-search');
            });

          this.route.params.subscribe(() => {
            this.search
              .searchMovieByTitle(this.route.snapshot.params['searchTitle'])
              .then((searchResults) => {
                this.refreshSearchResults(searchResults, 'title-search');
              });
          });
        } else this.pageTitle = 'No results found.';
      }
    }
  }

  refreshSearchResults(searchResults, searchType: string) {
    this.movies = searchResults['results'];
    this.showDetails = false;
    this.showResults = true;

    if (searchType === 'pop-movies') {
      this.pageTitle = 'Showing Popular Movies';
    } else {
      this.pageTitle =
        'Showing results for: ' + this.route.snapshot.params['searchTitle'];
    }
  }

  onDetailsClicked(details) {
    this.search.onMovieDetailsClicked(details);
    this.showDetails = true;
  }
}
