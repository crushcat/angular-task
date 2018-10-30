import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ICourse } from '../../interfaces';
import { Course } from '../../entites';

import { ItemComponent } from './item.component';
import { DurationPipe } from '../../pipes/duration/duration.pipe';

const mockCourse: ICourse = new Course({
  id: 0,
  name: 'Webpack',
  date: new Date(),
  length: 90,
  description: 'Test',
  authors: [{id: 0, name: 'Test'}],
  isTopRated: false
});

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponent, DurationPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
