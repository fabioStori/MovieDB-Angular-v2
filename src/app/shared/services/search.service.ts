import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchService {
  clickedMovieDetails = new EventEmitter<{}>();
  private movieDetails = {};

  onMovieDetailsClicked(details: {}) {
    this.movieDetails = details;
    this.clickedMovieDetails.emit(details);
  }

  getMovieDetails() {
    return this.movieDetails;
  }

  searchMovieByTitle(title: string, page: number) {
    console.log('Searching movie');
    return fetch(
      `https://api.themoviedb.org/3/search/movie?&api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&query=${title}&page=${page}`
    ).then((response) => response.json());
  }

  searchMovieById(movieId: number) {
    console.log('Searching movies by id');
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d`
    ).then((response) => response.json());
  }

  searchSimilarMovies(movieId: number) {
    console.log('Searching similar movies');
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&language=en-US&page=1`
    ).then((response) => response.json());
  }

  searchPopMovies(page: number) {
    console.log('Searching popular movies');
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&sort_by=popularity.desc&page=${page}`
    ).then((response) => response.json());
  }
}
