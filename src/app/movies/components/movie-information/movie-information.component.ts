import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-movie-information',
  templateUrl: './movie-information.component.html',
})
export class MovieInformationComponent implements OnInit {
  @Input() movieInformation = {};

  constructor(private search: SearchService) {}

  ngOnInit(): void {
    this.movieInformation = this.search.getMovieDetails()
  }
}
