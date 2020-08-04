import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { SearchService } from '../../shared/services/search.service';

@Injectable({
  providedIn: 'root',
})
export class MovieSimilarResolver implements Resolve<{}> {
  constructor(private search: SearchService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): {} | Observable<{}> | Promise<{}> {
    return this.search.searchSimilarMovies(route.parent.params['id'])
  }
}
