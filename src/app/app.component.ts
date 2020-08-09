import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerFeature = {};
  showResults = false;

  constructor(private router: Router) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  headerFeatureClicked(event): void {
    this.headerFeature = event;
    if (event.feature === 'home') {
      this.router.navigate(['/home']);
    } else if (event.feature === 'search-title') {
      this.router.navigate(['/search-title']);
    }
  }
}
