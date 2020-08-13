import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  movies = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.movies = data['movie']['results'];
    });
  }
}
