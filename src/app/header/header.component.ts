import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() searchClicked = new EventEmitter<{
    title: string;
  }>();

  @Output() headerFeature = new EventEmitter<{
    feature: string;
    searchedTitle: string;
  }>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // onSearchClick(searchedMovie: HTMLInputElement) {
  //   this.searchClicked.emit({
  //     title: searchedMovie.value,
  //   });
  // }

  headerFeatureClicked(feature: string, searchedTitle: string) {
    this.headerFeature.emit({ feature, searchedTitle });
    if (feature === 'popular-movies') this.router.navigate(['/pop-movies']);
    else if (feature === 'home') this.router.navigate(['']);
  }
}
