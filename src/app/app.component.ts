import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  headerFeature = {};
  showResults: boolean = false;

  headerFeatureClicked(event) {
    this.headerFeature = event;
    if (event.feature === 'home') this.showResults = false;
    else this.showResults = true;
  }
}
