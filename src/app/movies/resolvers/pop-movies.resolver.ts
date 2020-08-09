/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { SearchService } from '../../shared/services/search.service';

@Injectable({
  providedIn: 'root'
})
export class PopMoviesResolver implements Resolve<{}> {
  constructor(private route: ActivatedRoute, private search: SearchService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): {} | Observable<{}> | Promise<{}> {
    return this.search.searchPopMovies(route.queryParams['page']);
  }
}
