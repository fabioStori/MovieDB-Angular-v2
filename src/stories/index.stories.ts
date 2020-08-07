import { moduleMetadata, storiesOf } from '@storybook/angular';
import { HeaderComponent } from '../app/layout/components/header/header.component';
import { FooterComponent } from '../app/layout/components/footer/footer.component';
import { MovieInformationComponent } from '../app/movies/components/movie-information/movie-information.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import 'bootstrap/dist/css/bootstrap.css';
import { MoviePageComponent } from '../app/movies/components/movie-page/movie-page.component';

const RouterModuleLayoutImport = [
  RouterModule.forRoot(
    [
      {
        path: '',
        loadChildren: () =>
          import('../app/layout/layout.module').then((m) => m.LayoutModule),
      },
    ],
    { useHash: true }
  ),
];
const RouterModuleMoviesImport = [
  RouterModule.forRoot(
    [
      {
        path: '',
        loadChildren: () =>
          import('../app/movies/movies.module').then((m) => m.MoviesModule),
      },
    ],
    { useHash: true }
  ),
];

storiesOf('Header', module)
  .addDecorator(
    moduleMetadata({
      declarations: [HeaderComponent],
      imports: [...RouterModuleLayoutImport],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    })
  )
  .add('default', () => {
    return {
      template: `
        <header>
          <div class="row">
            <div class="col-xs-12">
              <app-header></app-header>
            </div>
          </div>
        </header>
    `,
      props: {},
    };
  });
storiesOf('Footer', module)
  .addDecorator(
    moduleMetadata({
      declarations: [FooterComponent],
    })
  )
  .add('default', () => {
    return {
      template: `
        <app-footer></app-footer>
    `,
      props: {},
    };
  });
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
storiesOf('MoviePageComponent', module)
  .addDecorator(
    moduleMetadata({
      declarations: [MoviePageComponent],
      imports: [...RouterModuleMoviesImport],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    })
  )
  .add('default', () => {
    return {
      template: `
        <app-movie-page></app-movie-page>
    `,
      props: {},
    };
  });
