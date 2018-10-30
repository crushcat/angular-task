import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDurationComponent } from './form-duration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DurationPipe } from '../../pipes/duration/duration.pipe';

describe('ItemEditDurationComponent', () => {
  let component: FormDurationComponent;
  let fixture: ComponentFixture<FormDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule, 
        FormsModule,
      ],
      declarations: [ FormDurationComponent, DurationPipe ]
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
