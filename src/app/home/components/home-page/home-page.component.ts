import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  movies = [];
  currentSlide = 0;
  slides = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.movies = data.movie.results;
    });
  }

  isNextSlide(slideIndex: number): boolean {
    // const columnSize = 3;
    // const slideColumns = 2;
    // return (this.currentSlide + slideColumns) * columnSize <= slideIndex;
    return true;
  }

  isCurrentSlide(slideIndex: number): boolean {
    switch (this.currentSlide) {
      case 0: {
        if (slideIndex <= 3) return true;
        else return false;
      }
      case 1: {
        if (slideIndex > 3 && slideIndex <= 7) return true;
        else return false;
      }
      case 2: {
        if (slideIndex > 7 && slideIndex <= 11) return true;
        else return false;
      }
      case 3: {
        if (slideIndex > 11 && slideIndex <= 15) return true;
        else return false;
      }
    }
    // const columnSize = 3;
    // const slideColumns = 2;
    // return (
    //   slideIndex >= this.currentSlide * columnSize &&
    //   slideIndex < (this.currentSlide + slideColumns) * columnSize
    // );
  }

  isBackSlide(slideIndex: number): boolean {
    // const columnSize = 3;
    // return this.currentSlide * columnSize > slideIndex;
    return true;
  }

  back() {
    this.currentSlide--;
  }
  next() {
    this.currentSlide++;
  }
}
