import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() searchClicked = new EventEmitter<{
    title: string;
  }>();

  @Output() headerFeature = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSearch(searchedMovie: HTMLInputElement) {
    this.searchClicked.emit({
      title: searchedMovie.value,
    });
  }

  headerFeatureClicked(feature: string) {
    this.headerFeature.emit(feature);
  }
}
