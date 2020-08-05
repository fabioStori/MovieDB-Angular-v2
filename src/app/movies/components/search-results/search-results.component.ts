import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnInit {
  movies = [];
  chosenMovie = {};
  pageTitle: string = '';
  pageNumber: number = 1;
  totalPagesArray = [];
  totalPagesLength: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private search: SearchService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.refreshSearchResults(data);
    });
  }

  refreshSearchResults(searchResults) {
    this.totalPagesLength = searchResults['movies']['total_pages'];
    this.totalPagesArray = Array(this.totalPagesLength)
      .fill(1)
      .map((x, i) => i);
    this.movies = searchResults['movies']['results'];
    this.pageTitle =
      'Showing results for: ' + this.route.snapshot.params['searchTitle'];
  }

  onDetailsClicked(details) {
    this.router.navigate([details['id']], { relativeTo: this.route });
  }

  onNextPage() {
    this.pageNumber++;
    this.search
      .searchMovieByTitle(
        this.route.snapshot.params['searchTitle'],
        this.pageNumber
      )
      .then((results) => {
        this.movies = results['results'];
      });
  }
  onPreviousPage() {
    this.pageNumber--;
    this.search
      .searchMovieByTitle(
        this.route.snapshot.params['searchTitle'],
        this.pageNumber
      )
      .then((results) => {
        this.movies = results['results'];
      });
  }
}
