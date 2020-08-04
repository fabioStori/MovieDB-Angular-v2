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

  searchMovieByTitle(title: string) {
    console.log('Searching movie');
    return fetch(
      `https://api.themoviedb.org/3/search/movie?&api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&query=${title}`
    ).then((response) => response.json());
  }

  searchMovieById(id) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d`
    ).then((response) => response.json());
  }

  searchSimilarMovies(movieId) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&language=en-US&page=1`
    ).then((response) => response.json());
  }

  searchPopMovies() {
    console.log('Searching popular movies');
    return fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&sort_by=popularity.desc'
    ).then((response) => response.json());
  }
}
