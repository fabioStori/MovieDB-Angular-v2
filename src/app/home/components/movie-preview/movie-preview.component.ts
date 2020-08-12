import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';

interface YoutubeVideoState {
  thumbnailUrl: string;
  videoUrl: string;
}

const initialState: YoutubeVideoState = {
  videoUrl: null,
  thumbnailUrl: null
};
@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html'
})
export class MoviePreviewComponent implements OnChanges, OnInit {
  @HostBinding('class')
  @Input()
  id: string;

  state: YoutubeVideoState;

  video = 'https://www.youtube.com/embed/CD-E-LDc384';

  constructor() {
    this.state = initialState;
  }
  ngOnInit(): void {}

  ngOnChanges(): void {
    // this.state = {
    //   thumbnailUrl: `https://img.youtube.com/vi/${this.id}/maxresdefault.jpg`,
    //   videoUrl: `https://www.youtube.com/embed/${this.id}`
    // };
  }
}
