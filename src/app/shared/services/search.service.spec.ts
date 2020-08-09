import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';

describe('Search service', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchService]
    });
  });
  beforeEach(() => {
    service = TestBed.get(SearchService);
  });

  it('should print service', () => {
    console.log(service.searchPopMovies(1));
  });
});
