import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private router: Router, private search: SearchService) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      console.log(data);
      if (data['routeName'] === 'Popular movies')
        this.refreshSearchResults(data, 'pop-movies');
      else if (data['routeName'] === 'Searched movies')
        this.refreshSearchResults(data, 'title-search');
    });
  }

  refreshSearchResults(searchResults, searchType: string) {
    this.showDetails = false;
    this.showResults = true;

    if (searchType === 'pop-movies') {
      this.movies = searchResults['movies']['results'];
      this.pageTitle = 'Showing Popular Movies';
    } else {
      this.movies = searchResults['movies']['results'];
      this.pageTitle =
        'Showing results for: ' + this.route.snapshot.params['searchTitle'];
    }
  }

  onDetailsClicked(details, index) {
    this.search.onMovieDetailsClicked(details);
    this.router.navigate([index], {relativeTo: this.route})
  }
}
