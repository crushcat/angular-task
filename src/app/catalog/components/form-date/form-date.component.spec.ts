import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDateComponent } from './form-date.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('FormDateComponent', () => {
  let component: FormDateComponent;
  let fixture: ComponentFixture<FormDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule, 
        FormsModule,
      ],
      declarations: [ FormDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
