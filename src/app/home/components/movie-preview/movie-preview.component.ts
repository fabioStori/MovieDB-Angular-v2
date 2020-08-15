import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html'
})
export class MoviePreviewComponent implements OnInit {
  @Input() movie = {};
  movieVideos = {};
  movieVideoUrl = '';
  imagePath = '';
  showMovieTrailer = false;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService
      .searchVideos(this.movie['id'])
      .subscribe((data: Data) => {
        this.movieVideos = data['results'];
        if (this.movieVideos['length'] != 0) {
          this.movieVideoUrl =
            'https://www.youtube.com/embed/' + this.movieVideos[0]['key'];
        }
        if (this.movie['backdrop_path'] !== null) {
          this.imagePath = `https://image.tmdb.org/t/p/w500${this.movie['backdrop_path']}`;
        } else {
          this.imagePath = `https://image.tmdb.org/t/p/w500${this.movie['poster_path']}`;
        }
      });
  }

  onTrailerClick(): void {
    this.showMovieTrailer = true;
  }
  onPosterClick(): void {
    this.showMovieTrailer = false;
  }
}
