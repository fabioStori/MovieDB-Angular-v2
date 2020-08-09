import { moduleMetadata, storiesOf } from '@storybook/angular';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MoviePageComponent } from '../../app/movies/components/movie-page/movie-page.component';

const RouterModuleMoviesImport = [
  RouterModule.forRoot(
    [
      {
        path: '',
        loadChildren: () =>
          import('../../app/movies/movies.module').then((m) => m.MoviesModule)
      }
    ],
    { useHash: true }
  )
];

const posterUrlMock = '';
const collectionPosterUrlMock = '';
const voteAverageMock = '';
const movieMock = {
  adult: false,
  backdrop_path: '/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg',
  belongs_to_collection: {
    id: 531241,
    name: 'Spider-Man (Avengers) Collection',
    poster_path: '/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg',
    backdrop_path: '/zh72eVJTD5EssStCsNHqELuh6uD.jpg'
  },
  budget: 160000000,
  homepage: 'https://www.marvel.com/movies/spider-man-far-from-home',
  id: 429617,
  imdb_id: 'tt6320628',
  original_language: 'en',
  original_title: 'Spider-Man: Far from Home',
  overview:
    'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
  popularity: 61.067,
  poster_path: '/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
  production_companies: Array(5),
  0: {
    id: 420,
    logo_path: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
    name: 'Marvel Studios',
    origin_country: 'US'
  },
  1: {
    id: 5,
    logo_path: '/71BqEFAF4V3qjjMPCpLuyJFB9A.png',
    name: 'Columbia Pictures',
    origin_country: 'US'
  },
  2: {
    id: 84041,
    logo_path: '/XmHMPGzdI5c4WGX1YlxU4s2v7T.png',
    name: 'Pascal Pictures',
    origin_country: 'US'
  },
  3: {
    id: 34,
    logo_path: '/GagSvqWlyPdkFHMfQ3pNq6ix9P.png',
    name: 'Sony Pictures',
    origin_country: 'US'
  },
  4: { id: 86561, logo_path: null, name: 'Stereo D', origin_country: 'US' },
  length: 5,
  __proto__: Array(0),
  release_date: '2019-06-28',
  revenue: 1131927996,
  runtime: 129,
  status: 'Released',
  tagline: 'It’s time to step up.',
  title: 'Spider-Man: Far from Home',
  video: false,
  vote_average: 7.5,
  vote_count: 8024
};

storiesOf('MoviePageComponent', module)
  .addDecorator(
    moduleMetadata({
      declarations: [MoviePageComponent],
      imports: [...RouterModuleMoviesImport],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
  )
  .add('default', () => ({
    template: `
        <app-movie-page></app-movie-page>
    `,
    component: MoviePageComponent,
    props: {}
  }))
  .add('with content', () => ({
    template: `
        <app-movie-page></app-movie-page>
    `,
    // template: `
    //     <app-movie-page [movie]="movie"
    //       [posterUrl]="posterUrl"
    //       [collectionPosterUrl]="collectionPosterUrl"
    //       [voteAverage]="voteAverage" >
    //     </app-movie-page>
    // `,
    component: MoviePageComponent,
    props: {
      movie: movieMock,
      posterUrl: posterUrlMock,
      collectionPosterUrl: collectionPosterUrlMock,
      voteAverage: voteAverageMock
    }
  }));
