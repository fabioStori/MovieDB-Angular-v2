import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  movies = [];
  slides = [];
  currentSlide = 0;
  numOfSlides = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.movies = data.movie.results;
      this.numOfSlides = this.movies.length / 4;
      this.slides = Array.from(Array(this.numOfSlides), (_, i) => i);
    });
  }

  isCurrentSlide(slideIndex: number): boolean {
    switch (this.currentSlide) {
      case 0: {
        if (slideIndex === 0) return true;
        else return false;
      }
      case 1: {
        if (slideIndex === 1) return true;
        else return false;
      }
      case 2: {
        if (slideIndex === 2) return true;
        else return false;
      }
      case 3: {
        if (slideIndex === 3) return true;
        else return false;
      }
      case 4: {
        if (slideIndex === 4) return true;
        else return false;
      }
    }
  }

  getMovieSlides(index: number) {
    if (index === 0) {
      return this.movies.slice(0, 4);
    } else if (index === 1) {
      return this.movies.slice(4, 8);
    } else if (index === 2) {
      return this.movies.slice(8, 12);
    } else if (index === 3) {
      return this.movies.slice(12, 16);
    } else if (index === 4) {
      return this.movies.slice(16, 20);
    }
  }

  back(): void {
    this.currentSlide--;
  }
  next(): void {
    this.currentSlide++;
  }
}
