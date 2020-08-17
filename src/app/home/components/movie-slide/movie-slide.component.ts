import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-slide',
  templateUrl: './movie-slide.component.html'
})
export class MovieSlideComponent implements OnInit {
  @Input() slideMovies = [];
  constructor() {}

  ngOnInit(): void {}
}
