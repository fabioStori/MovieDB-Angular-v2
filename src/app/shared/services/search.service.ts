/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SearchService {
  // constructor(private http: HttpClient) {}

  async searchMovieByTitle(title: string, page: number) {
    console.log('Searching movie');
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?&api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&query=${title}&page=${page}`
    );
    return await response.json();
  }

  async searchMovieById(movieId: number) {
    console.log('Searching movies by id');
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d`
    );
    return await response.json();
  }

  async searchSimilarMovies(movieId: number) {
    console.log('Searching similar movies');
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&language=en-US&page=1`
    );
    return await response.json();
  }

  public async searchPopMovies(page: number) {
    console.log('Searching popular movies');
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&sort_by=popularity.desc&page=${page}`
    );
    return await response.json();

    // this.http
    //   .get(
    //     `https://api.themoviedb.org/3/discover/movie?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&sort_by=popularity.desc&page=${page}`
    //   )
    //   .subscribe((resp) => {
    //     console.log(resp);
    //   });
  }
}
