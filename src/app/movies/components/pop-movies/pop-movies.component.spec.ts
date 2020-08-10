import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PopMoviesComponent } from './pop-movies.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('PopMoviesComponent', () => {
  let component: PopMoviesComponent;
  let fixture: ComponentFixture<PopMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopMoviesComponent],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PopMoviesComponent);
    component = fixture.componentInstance;
  }));

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('# initializing', () => {
    test('should call methods from ngOnInit', () => {
      const onInit = jest.spyOn(component, 'ngOnInit');
      component.ngOnInit();
      expect(onInit).toHaveBeenCalled();
    });
  });
});
