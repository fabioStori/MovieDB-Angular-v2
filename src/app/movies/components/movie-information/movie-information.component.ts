import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-information',
  templateUrl: './movie-information.component.html',
})
export class MovieInformationComponent implements OnInit {
  @Input() movieInformation = {};

  ngOnInit(): void {}
}
