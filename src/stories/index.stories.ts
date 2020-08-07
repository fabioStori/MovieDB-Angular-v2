import { moduleMetadata, storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { HeaderComponent } from '../app/layout/components/header/header.component';
import { FooterComponent } from '../app/layout/components/footer/footer.component';
import { MovieInformationComponent } from '../app/movies/components/movie-information/movie-information.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import 'bootstrap/dist/css/bootstrap.css';

import { Welcome, Button } from '@storybook/angular/demo';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }),
    { notes: 'My notes on a button with emojis' }
  )
  .add(
    'with some emoji and action',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }),
    { notes: 'My notes on a button with emojis' }
  );

storiesOf('Another Button', module).add(
  'button with link to another story',
  () => ({
    component: Button,
    props: {
      text: 'Go to Welcome Story',
      onClick: linkTo('Welcome'),
    },
  })
);
storiesOf('Header', module)
  .addDecorator(
    moduleMetadata({
      declarations: [HeaderComponent],
      imports: [
        CommonModule,
        RouterModule.forRoot(
          [
            {
              path: '',
              loadChildren: () =>
                import('../app/layout/layout.module').then(
                  (m) => m.LayoutModule
                ),
            },
          ],
          { useHash: true }
        ),
      ],
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
      imports: [CommonModule],
      providers: [],
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
      imports: [CommonModule],
      providers: [ActivatedRoute],
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
