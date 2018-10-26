import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuthorsComponent } from './form-authors.component';

describe('FormAuthorsComponent', () => {
  let component: FormAuthorsComponent;
  let fixture: ComponentFixture<FormAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
