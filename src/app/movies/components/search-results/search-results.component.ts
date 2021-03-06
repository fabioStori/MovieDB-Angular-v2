import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit {
  movies = [];
  chosenMovie = {};
  searchedTitle = '';
  pageTitle = '';
  pageNumber = 1;
  totalPagesArray = [];

  constructor(private route: ActivatedRoute, private search: SearchService) {}

  ngOnInit(): void {
    console.log(this.route.snapshot);
    //subscribing to searched title
    this.route.data.subscribe((data: Data) => {
      console.log(data);
      this.refreshSearchResults(data);
    });
    //subscribing to page number param
    this.route.queryParams.subscribe((data: Data) => {
      this.searchedTitle = this.route.snapshot.params['searchTitle'];
      this.search
        .searchMovieByTitle(this.searchedTitle, data['page'])
        .subscribe((data: Data) => {
          this.movies = data['results'];
        });
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  refreshSearchResults(searchResults): void {
    //refreshing page title with the title searched, the number of results (number os pages) and the search results
    this.totalPagesArray = Array.from(
      Array(searchResults['movies']['total_pages']),
      (_, i) => i + 1
    );
    this.pageTitle =
      'Showing results for: ' + this.route.snapshot.params['searchTitle'];
    this.movies = searchResults['movies']['results'];
  }
}
