import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() headerFeature = new EventEmitter<{
    feature: string;
    searchedTitle: string;
  }>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  headerFeatureClicked(feature: string, searchedTitle: string) {
    this.headerFeature.emit({ feature, searchedTitle });
    switch (feature) {
      case 'home': {
        this.router.navigate(['']);
        break;
      }
      case 'popular-movies': {
        this.router.navigate(['pop-movies']);
        break;
      }
      case 'search-title': {
        this.router.navigate(['search-movie']);
        break;
      }
    }
  }
}
