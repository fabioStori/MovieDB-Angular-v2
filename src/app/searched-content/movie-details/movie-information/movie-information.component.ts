import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-information',
  templateUrl: './movie-information.component.html',
  styleUrls: ['./movie-information.component.scss'],
})
export class MovieInformationComponent implements OnInit, OnChanges {
  @Input() movieInformation = {};


  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  ngOnChanges() {
    this.http
      .get(
        `https://api.themoviedb.org/3/movie/${this.movieInformation['id']}?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d`
      )
      .subscribe((resp) => {
        if (resp) {
          console.log('Showing information');
          this.movieInformation = resp;
        }
      });
  }
}
