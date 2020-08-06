import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PopMoviesComponent } from './pop-movies.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: PopMoviesComponent;
  let fixture: ComponentFixture<PopMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopMoviesComponent],
      imports: [RouterTestingModule],
    });
  }));
  beforeEach(async(() => {
    fixture = TestBed.createComponent(PopMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('# initializing', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    test('should call methods from ngOnInit', () => {
      const onInit = jest.spyOn(component, 'ngOnInit');
      component.ngOnInit();
      expect(onInit).toHaveBeenCalled();
    });
  });
});
