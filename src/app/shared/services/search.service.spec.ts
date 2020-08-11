import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

describe('Search service', () => {
  let service: SearchService;
  let httpTestCtrl: HttpTestingController;
  const SEARCH_BY_TITLE_URL =
    'https://api.themoviedb.org/3/search/movie?&api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&query=avengers&page=1';
  const SEARCH_BY_ID_URL =
    'https://api.themoviedb.org/3/movie/24428?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d';
  const SEARCH_SIMILAR_URL =
    'https://api.themoviedb.org/3/movie/24428/similar?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&language=en-US&page=1';
  const SEARCH_POP_URL =
    'https://api.themoviedb.org/3/discover/movie?api_key=8fa93c9b6c348f8a5cdc2ac737953f7d&sort_by=popularity.desc&page=1';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });
  });
  beforeEach(() => {
    service = TestBed.get(SearchService);
    httpTestCtrl = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestCtrl.verify();
  });
  describe('successful get methods', () => {
    test('should test searchMovieByTitle.get', () => {
      const testModel = {
        movies: {},
        routeName: 'Searched movies'
      };
      service.searchMovieByTitle('avengers', '1').subscribe((data) => {
        expect(testModel).toBe(data);
      });
      const req = httpTestCtrl.expectOne(SEARCH_BY_TITLE_URL);
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(testModel);
    });
    test('should test searchMovieById.get', () => {
      const testModel = {
        similarMovies: {}
      };
      service.searchMovieById(24428).subscribe((data) => {
        expect(testModel).toBe(data);
      });
      const req = httpTestCtrl.expectOne(SEARCH_BY_ID_URL);
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(testModel);
    });
    test('should test searchSimilarMovies.get', () => {
      const testModel = {
        movies: {}
      };
      service.searchSimilarMovies(24428).subscribe((data) => {
        expect(testModel).toBe(data);
      });
      const req = httpTestCtrl.expectOne(SEARCH_SIMILAR_URL);
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(testModel);
    });
    test('should test searchPopMovies.get', () => {
      const testModel = {
        movies: {
          page: 1,
          total_results: 10000,
          total_pages: 500,
          results: Array(20)
        },
        routeName: 'Popular movies'
      };
      service.searchPopMovies('1').subscribe((data) => {
        expect(testModel).toBe(data);
      });
      const req = httpTestCtrl.expectOne(SEARCH_POP_URL);
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(testModel);
    });
  });
  describe('error get methods', () => {
    test('should test error of searchMovieByTitle.get', () => {
      const errorMsg = 'mock 404 error occured';
      service.searchMovieByTitle('avengers', '1').subscribe(
        () => {
          fail('failing with error 404');
        },
        (error: HttpErrorResponse) => {
          expect(error.status).toEqual(404);
          expect(error.error).toEqual(errorMsg);
        }
      );
      const req = httpTestCtrl.expectOne(SEARCH_BY_TITLE_URL);
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(errorMsg, { status: 404, statusText: 'Not found' });
    });
    test('should test error of searchMovieById.get', () => {
      const errorMsg = 'mock 404 error occured';
      service.searchMovieById(24428).subscribe(
        () => {
          fail('failing with error 404');
        },
        (error: HttpErrorResponse) => {
          expect(error.status).toEqual(404);
          expect(error.error).toEqual(errorMsg);
        }
      );
      const req = httpTestCtrl.expectOne(SEARCH_BY_ID_URL);
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(errorMsg, { status: 404, statusText: 'Not found' });
    });
    test('should test error of searchSimilarMovies.get', () => {
      const errorMsg = 'mock 404 error occured';
      service.searchSimilarMovies(24428).subscribe(
        () => {
          fail('failing with error 404');
        },
        (error: HttpErrorResponse) => {
          expect(error.status).toEqual(404);
          expect(error.error).toEqual(errorMsg);
        }
      );
      const req = httpTestCtrl.expectOne(SEARCH_SIMILAR_URL);
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(errorMsg, { status: 404, statusText: 'Not found' });
    });
    test('should test error of searchPopMovies.get', () => {
      const errorMsg = 'mock 404 error occured';
      service.searchPopMovies('1').subscribe(
        () => {
          fail('failing with error 404');
        },
        (error: HttpErrorResponse) => {
          expect(error.status).toEqual(404);
          expect(error.error).toEqual(errorMsg);
        }
      );
      const req = httpTestCtrl.expectOne(SEARCH_POP_URL);
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(errorMsg, { status: 404, statusText: 'Not found' });
    });
  });
});
