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
  pageNumber: number = 1;
  totalPagesArray = [];
  totalPagesLength: number = 1;
  pageTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private search: SearchService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      if (data['routeName'] === 'Popular movies')
        this.refreshSearchResults(data, 'pop-movies');
      else if (data['routeName'] === 'Searched movies')
        this.refreshSearchResults(data, 'title-search');
    });
  }

  refreshSearchResults(searchResults, searchType: string) {
    this.totalPagesLength = searchResults['movies']['total_pages'];
    console.log(this.totalPagesLength)
    this.totalPagesArray = Array(this.totalPagesLength).fill(1).map((x,i)=>i);

    if (searchType === 'pop-movies') {
      this.movies = searchResults['movies']['results'];
      this.pageTitle = 'Showing Popular Movies';
    } else {
      this.movies = searchResults['movies']['results'];
      this.pageTitle =
        'Showing results for: ' + this.route.snapshot.params['searchTitle'];
    }
  }

  onDetailsClicked(details) {
    this.search.onMovieDetailsClicked(details);
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
        console.log(results);
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
        console.log(results);
        this.movies = results['results'];
      });
  }
}
