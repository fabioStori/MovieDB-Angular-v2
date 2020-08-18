/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpClient) {}

  searchMovieByTitle(title: string, page: string) {
    console.log('Searching movie');

    let params = new HttpParams();
    params = params.append('query', title);
    params = params.append('page', page);

    const response = this.http.get(
      `https://api.themoviedb.org/3/search/movie?&api_key=8fa93c9b6c348f8a5cdc2ac737953f7d`,
      {
        params: params
      }
    );
    return response;
  }

  searchMovieById(movieId: number) {
    console.log('Searching movies by id');
    const response = this.http.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d`
    );
    return response;
  }

  searchSimilarMovies(movieId: number) {
    console.log('Searching similar movies');
    const response = this.http.get(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&language=en-US`,
      {
        params: new HttpParams().set('page', '1')
      }
    );
    return response;
  }

  searchPopMovies(page: string) {
    console.log('Searching pop movies');
    const response = this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&sort_by=popularity.desc`,
      {
        params: new HttpParams().set('page', page)
      }
    );
    return response;
  }
  searchNowPlayingMovies(page: string) {
    console.log('Searching now playing movies');
    const response = this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&language=en-US&page=1&region=US`,
      {
        params: new HttpParams().set('page', page)
      }
    );
    return response;
  }

  searchVideos(movieId: number) {
    console.log('Searching videos');
    const response = this.http.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d`
    );
    return response;
  }
}
