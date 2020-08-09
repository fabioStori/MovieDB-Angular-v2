/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Data
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { SearchService } from '../../shared/services/search.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsResolver implements Resolve<{}> {
  constructor(private search: SearchService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): {} | Observable<{}> | Promise<{}> {
    return this.search.searchMovieById(+route.params['id']);
  }
}
