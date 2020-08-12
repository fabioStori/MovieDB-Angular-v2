import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  headerFeature = '';
  @ViewChild('searchedTitle', { static: true }) searchedTitle: ElementRef;

  constructor(private router: Router) {}

  headerFeatureClicked(feature: string): void {
    switch (feature) {
      case 'home': {
        this.router.navigate(['']);
        break;
      }
      case 'popular-movies': {
        this.router.navigate(['pop-movies']);
        break;
      }
      case 'search': {
        this.router.navigate([
          'search',
          this.searchedTitle.nativeElement.value
        ]);
        break;
      }
    }
  }
}
