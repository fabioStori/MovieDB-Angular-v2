import { storiesOf, moduleMetadata } from '@storybook/angular';

import { SearchedMovieComponent } from '../searched-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

storiesOf('searched-movie', module)
  .addDecorator(
    moduleMetadata({
      imports: [HttpClientModule],
      declarations: [SearchedMovieComponent, MovieDetailsComponent],
    })
  )
  .add('Default', () => {
    return {
      template: `<app-searched-movie [searchFeature]="popular-movies"></app-searched-movie>`,
    };
  });
