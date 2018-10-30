import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFormComponent } from './item-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Course } from '../../entites';
import { ICourse } from '../../interfaces';

const mockCourse: ICourse = new Course({
  id: 0,
  name: 'Webpack',
  date: new Date(),
  length: 90,
  description: 'Test',
  authors: [{id: 0, name: 'Test'}],
  isTopRated: false
});

describe('ItemFormComponent', () => {
  let component: ItemFormComponent;
  let fixture: ComponentFixture<ItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule, 
        FormsModule,
      ],
      declarations: [ ItemFormComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFormComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
