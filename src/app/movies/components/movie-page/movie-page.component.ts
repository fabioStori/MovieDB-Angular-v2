import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
})
export class MoviePageComponent implements OnInit {
  movie = {}
  posterUrl = ""
  voteAverage = ""

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.movie = data['movie']
      this.posterUrl = `https://image.tmdb.org/t/p/w500/${data['movie']['poster_path']}`
      this.voteAverage = `${data['movie']['vote_average'] * 10}`
      console.log(this.movie)
    })
  }

}
