import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-movie-information',
  templateUrl: './movie-information.component.html',
})
export class MovieInformationComponent implements OnInit {
  movieInformation = {};
  movieId = this.route.parent.params['value']['id'];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private search: SearchService
  ) {}

  ngOnInit(): void {
    this.search.searchMovieById(+this.movieId).then((results = {}) => {
      this.movieInformation = results;
    });
  }
  onMoreInformationClick() {
    this.router.navigate(['/movie-page', this.movieId]);
  }
}
