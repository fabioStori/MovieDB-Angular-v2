import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
    });
  }));
  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('# initializing', () => {
    test('should create', () => {
      expect(component).toBeTruthy();
    });

    test('should call methods from ngOnInit', () => {
      const onInit = jest.spyOn(component, 'ngOnInit');
      component.ngOnInit();
      expect(onInit).toHaveBeenCalled();
    });
  });
});
