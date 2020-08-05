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
  }

  onDetailsClicked(details) {
    this.router.navigate([details['id']], { relativeTo: this.route });
  }

  onNextPage() {
    this.pageNumber++;
    this.search
      .searchPopMovies(
        this.pageNumber
      )
      .then((results) => {
        this.movies = results['results'];
      });
  }
  onPreviousPage() {
    this.pageNumber--;
    this.search
      .searchPopMovies(
        this.pageNumber
      )
      .then((results) => {
        this.movies = results['results'];
      });
  }
}
