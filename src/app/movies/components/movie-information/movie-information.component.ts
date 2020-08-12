import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-movie-information',
  templateUrl: './movie-information.component.html'
})
export class MovieInformationComponent implements OnInit {
  movieInformation = {};
  movieId = this.route.parent.params['value']['id'];
  constructor(private route: ActivatedRoute, private search: SearchService) {}

  ngOnInit(): void {
    this.search.searchMovieById(+this.movieId).subscribe((data: Data) => {
      this.movieInformation = data;
    });
  }
}
