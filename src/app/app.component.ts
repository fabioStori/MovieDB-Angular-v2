import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  headerFeature = {};
  showResults: boolean = false;

  constructor(private router: Router) {}

  headerFeatureClicked(event) {
    this.headerFeature = event;
    if (event.feature === 'home') {
      this.router.navigate(['/home']);
    } else if (event.feature === 'search-title') {
      this.router.navigate(['/search-title']);
    }
  }
}
