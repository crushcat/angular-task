import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDurationComponen } from './form-duration.component';

describe('ItemEditDurationComponent', () => {
  let component: FormDurationComponen;
  let fixture: ComponentFixture<FormDurationComponen>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDurationComponen ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDurationComponen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
