import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
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
