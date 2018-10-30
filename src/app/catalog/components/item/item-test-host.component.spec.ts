import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ICourse } from '../../interfaces';
import { Course } from '../../entites';
import {By} from '@angular/platform-browser';

import { ItemComponent } from './item.component';
import { DurationPipe } from '../../pipes/duration/duration.pipe';

const mockCourse: ICourse = {
  id: 0,
  name: 'Webpack',
  date: new Date(),
  length: 90,
  description: 'Test',
  authors: [{id: 0, name: 'Test'}],
  isTopRated: false
};

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

describe('Test ItemComponent\'s @output with TestHostComponent', () => {
    let testHost: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ TestHostComponent, ItemComponent, DurationPipe ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
    });

    it('@Input works!', () => {
      testHost.course = mockCourse;
      fixture.detectChanges();
      const title = fixture.debugElement.query(By.css('h2')).nativeElement;
      expect(title.textContent).toBe("WEBPACK");

      const button = fixture.debugElement.query(By.css('.btn-delete'));
      button.triggerEventHandler('click', null);
      expect(testHost.recieveData).toEqual(mockCourse.id);
  });

    it('@Output works!', () => {
        testHost.course = mockCourse;
        fixture.detectChanges();

        const button = fixture.debugElement.query(By.css('.btn-delete'));
        button.triggerEventHandler('click', null);
        expect(testHost.recieveData).toEqual(mockCourse.id);
    });

});