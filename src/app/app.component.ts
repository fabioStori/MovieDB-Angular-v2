import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerFeature:string = "";
  showResults:boolean = false;

  headerFeatureClicked(feature:string){
    this.headerFeature = feature
    this.showResults = true
  }

}
