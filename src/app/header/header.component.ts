import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerFeature: string = '';
  @ViewChild('searchedTitle', { static: true }) searchedTitle: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  headerFeatureClicked(feature: string) {
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
          this.searchedTitle.nativeElement.value,
        ]);
        break;
      }
    }
  }
}
