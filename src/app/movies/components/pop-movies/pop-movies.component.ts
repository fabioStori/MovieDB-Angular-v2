import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-pop-movies',
  templateUrl: './pop-movies.component.html',
})
export class PopMoviesComponent implements OnInit {
  movies = [];
  chosenMovie = {};
  pageNumber: number = 1;
  totalPagesArray = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private search: SearchService
  ) {}

  ngOnInit(): void {
    //subscribing to searched title
    this.route.data.subscribe((data: Data) => {
      this.refreshSearchResults(data);
    });
    //subscribing to page number param
    this.route.queryParams.subscribe((data: Data) => {
      this.search.searchPopMovies(data['page']).then((data: Data) => {
        this.movies = data['results'];
      });
    });
  }

  refreshSearchResults(searchResults) {
    //refreshing the number of results (number os pages) and the search results

    this.movies = searchResults['movies']['results'];
    this.totalPagesArray = Array.from(Array(10), (_, i) => i + 1);
  }
}
