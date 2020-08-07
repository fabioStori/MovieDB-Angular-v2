import { moduleMetadata, storiesOf } from '@storybook/angular';
import { HeaderComponent } from '../../app/layout/components/header/header.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const RouterModuleLayoutImport = [
  RouterModule.forRoot(
    [
      {
        path: '',
        loadChildren: () =>
          import('../../app/layout/layout.module').then((m) => m.LayoutModule),
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
