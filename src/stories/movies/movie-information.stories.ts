import { moduleMetadata, storiesOf } from '@storybook/angular';
import { RouterModule } from '@angular/router';
import { MovieInformationComponent } from '../../app/movies/components/movie-information/movie-information.component';

const RouterModuleMoviesImport = [
  RouterModule.forRoot(
    [
      {
        path: '',
        loadChildren: () =>
          import('../../app/movies/movies.module').then((m) => m.MoviesModule),
      },
    ],
    { useHash: true }
  ),
];


storiesOf('MovieInformationComponent', module)
  .addDecorator(
    moduleMetadata({
      declarations: [MovieInformationComponent],
      imports: [...RouterModuleMoviesImport],
    })
  )
  .add('default', () => {
    return {
      template: `
        <app-movie-information></app-movie-information>
    `,
      props: {},
    };
  });
