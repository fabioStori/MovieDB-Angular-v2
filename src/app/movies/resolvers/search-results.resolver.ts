import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsResolver implements Resolve<{}> {
  constructor(private route: ActivatedRoute, private search: SearchService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): {} | Observable<{}> | Promise<{}> {
    if (route.data['routeName'] === 'Popular movies') {
      return this.search.searchPopMovies();
    } else if (route.data['routeName'] === 'Searched movies') {
      return this.search.searchMovieByTitle(route.params['searchTitle']);
    } else {
      return {};
    }
  }
}
