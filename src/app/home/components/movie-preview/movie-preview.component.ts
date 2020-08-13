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
  showMovieTrailer = false;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService
      .searchVideos(this.movie['id'])
      .subscribe((data: Data) => {
        this.movieVideos = data['results'][0];
        this.movieVideoUrl =
          'https://www.youtube.com/embed/' + this.movieVideos['key'];
        if (!!this.movieVideoUrl) {
          this.showMovieTrailer = true;
        }
      });
  }
}
