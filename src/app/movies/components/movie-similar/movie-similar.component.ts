import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-movie-similar',
  templateUrl: './movie-similar.component.html',
})
export class MovieSimilarComponent implements OnInit {
  @Input() movieId: string;
  similarMovies = [];
  posterUrl = [];

  constructor(private search: SearchService) {}

  ngOnInit(): void {
    this.search.searchSimilarMovies(this.movieId).then((similarMovies) => {
      this.similarMovies = similarMovies['results']
      for (const index in this.similarMovies) {
        this.posterUrl[
          index
        ] = `https://image.tmdb.org/t/p/w500/${this.similarMovies[index]['poster_path']}`;
      }
    });
  }
}
