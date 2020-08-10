import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-movie-similar',
  templateUrl: './movie-similar.component.html'
})
export class MovieSimilarComponent implements OnInit {
  similarMovies = [];
  posterUrl = [];
  foundedSimilarMovies = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      console.log(data);

      if (data['similarMovies']['results'].length !== 0) {
        this.similarMovies = data['similarMovies']['results'];
        for (const i in this.similarMovies) {
          this.posterUrl[
            i
          ] = `https://image.tmdb.org/t/p/w500/${this.similarMovies[i]['poster_path']}`;
        }
        this.foundedSimilarMovies = true;
      } else {
        this.foundedSimilarMovies = false;
      }
    });
  }
}
