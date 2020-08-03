import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private search: SearchService) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      console.log(data);
      if (data['routeName'] === 'Popular movies')
        this.refreshSearchResults(data['movies'], 'pop-movies');
      else if (data['routeName'] === 'Searched movie')
        this.refreshSearchResults(data['movies'], 'title-search');
    });
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
