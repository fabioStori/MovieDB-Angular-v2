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
      case 4: {
        if (slideIndex > 15 && slideIndex <= 19) return true;
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
