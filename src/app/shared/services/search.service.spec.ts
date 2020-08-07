import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchService } from './search.service';

describe('Search service', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchService],
    });
  });
  beforeEach(() => {
    service = TestBed.get(SearchService);
  });

  it('should print service', () => {
    console.log(service.searchPopMovies(1));
  });
});
