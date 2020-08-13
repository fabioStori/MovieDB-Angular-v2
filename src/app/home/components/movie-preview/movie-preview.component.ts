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
  showmovieTrailer = false;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService
      .searchVideos(this.movie['id'])
      .subscribe((data: Data) => {
        this.movieVideos = data['results'][0];
        console.log(this.movieVideos);
      });
  }
}
