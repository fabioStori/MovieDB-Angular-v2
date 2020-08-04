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
  foundedSimilarMovies: boolean = false;

  constructor(private search: SearchService) {}

  ngOnInit(): void {
    this.search.searchSimilarMovies(this.movieId).then((similarMovies) => {
      if (similarMovies['results'].length !== 0) {
        this.similarMovies = similarMovies['results'];
        for (const i in this.similarMovies) {
          this.posterUrl[i] = `https://image.tmdb.org/t/p/w500/${this.similarMovies[i]['poster_path']}`;
        }
        this.foundedSimilarMovies = true;
      } else {
        this.foundedSimilarMovies = false;
      }
    });
  }
}
