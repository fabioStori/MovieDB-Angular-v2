import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedContentComponent } from './searched-content.component';

describe('SearchedContentComponent', () => {
  let component: SearchedContentComponent;
  let fixture: ComponentFixture<SearchedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
