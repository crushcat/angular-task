import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ICourse } from '../../interfaces';
import { Course } from '../../entites';

import { ItemComponent } from './item.component';

const mockCourse: ICourse = new Course({
  id: 0,
  title: 'Webpack',
  creationDate: Date.now(),
  duration: 90,
  description: 'fsdfndsfsdionfklsdfklsd'
});

@Component({
  selector: 'at-test-component',
  template: `
    <at-item
      [course]="course"
      (deleteCourseEvent)="deleteCourse($event)"
    ></at-item>
  `,
  styleUrls: []
})
export class TestHostComponent {
  course: ICourse = mockCourse; 
  recieveData: number;
  deleteCourse(data) {
    this.recieveData = data;
  }
}

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
