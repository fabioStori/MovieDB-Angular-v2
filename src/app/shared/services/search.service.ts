import { Injectable, EventEmitter } from "@angular/core";

@Injectable({ providedIn: "root" })
// @Injectable()
export class SearchService{
  clickedMovieDetails = new EventEmitter<{}>();
  movieDetails = {}

  onMovieDetailsClicked(details: {}){
    // console.log(details)
    this.clickedMovieDetails.emit(details)
  }

}
