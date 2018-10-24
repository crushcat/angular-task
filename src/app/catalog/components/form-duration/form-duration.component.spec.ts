import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDurationComponent } from './form-duration.component';

describe('ItemEditDurationComponent', () => {
  let component: FormDurationComponent;
  let fixture: ComponentFixture<FormDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
