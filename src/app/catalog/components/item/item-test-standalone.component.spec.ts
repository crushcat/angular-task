import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ICourse } from '../../interfaces';
import { Course } from '../../entites';

import { ItemComponent } from './item.component';

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
      declarations: [ ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('@Input and binding works', () => {
    component.course = mockCourse;
    fixture.detectChanges();
  
    const nativeElement = fixture.nativeElement;
    const title: HTMLElement = nativeElement.querySelector("h2");
    expect(title.textContent).toBe("Webpack");
  });

});
