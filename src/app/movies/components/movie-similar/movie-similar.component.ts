import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-movie-similar',
  templateUrl: './movie-similar.component.html',
})
export class MovieSimilarComponent implements OnInit {
  @Input() similarMovies = {};
  posterUrl = [];

  constructor(private search: SearchService) {}

  ngOnInit(): void {
    this.search
      .searchSimilarMovies(this.similarMovies)
      .then((similarMovies) => {
        this.similarMovies = similarMovies['results'];
        this.posterUrl[0] = `https://image.tmdb.org/t/p/w500/${similarMovies['results'][0]['poster_path']}`;
        this.posterUrl[1] = `https://image.tmdb.org/t/p/w500/${similarMovies['results'][1]['poster_path']}`;
      });
  }
}
