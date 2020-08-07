import { moduleMetadata, storiesOf } from '@storybook/angular';
import { FooterComponent } from '../../app/layout/components/footer/footer.component';

storiesOf('Footer', module)
  .addDecorator(
    moduleMetadata({
      declarations: [FooterComponent],
    })
  )
  .add('storybook test', () => {
    return {
      template: `
        <app-footer [storyTestText]="storyTestText"></app-footer>
    `,
      props: {
        storyTestText: 'STORYBOOK TEST',
      },
    };
  });
