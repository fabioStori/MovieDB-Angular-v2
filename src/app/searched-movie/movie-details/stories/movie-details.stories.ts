import { storiesOf, moduleMetadata } from '@storybook/angular';

import { MovieDetailsComponent } from '../movie-details.component';
import { HttpClientModule } from '@angular/common/http';

storiesOf('movie-details', module)
  .addDecorator(
    moduleMetadata({
      imports: [HttpClientModule],
      declarations: [MovieDetailsComponent],
    })
  )
  .add('Default', () => {
    return {
      template: `<app-movie-details></app-movie-details>`,

    };
  });

