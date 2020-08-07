import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
})
export class MoviePageComponent implements OnInit {
  movie = {};
  posterUrl = '';
  collectionPosterUrl = '';
  voteAverage = '';
  // @Input() movie = {};
  // @Input() posterUrl = '';
  // @Input() collectionPosterUrl = '';
  // @Input() voteAverage = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.refreshData(data);
    });
  }

  refreshData(data: Data) {
    this.movie = data['movie'];
    this.voteAverage = `${this.movie['vote_average'] * 10}`;
    this.posterUrl = `https://image.tmdb.org/t/p/w500/${this.movie['poster_path']}`;
    console.log(this.movie);
    if (data['movie']['belongs_to_collection'] !== null)
      this.collectionPosterUrl = `https://image.tmdb.org/t/p/w500/${this.movie['belongs_to_collection']['backdrop_path']}`;
  }
}
