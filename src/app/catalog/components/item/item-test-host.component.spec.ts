import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ICourse } from '../../interfaces';
import { Course } from '../../entites';
import {By} from '@angular/platform-browser';

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

describe('Test ItemComponent\'s @output with TestHostComponent', () => {
    let testHost: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ TestHostComponent, ItemComponent ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
    });

    it('@Output works!', () => {
        testHost.course = mockCourse;
        fixture.detectChanges();

        const button = fixture.debugElement.query(By.css('.btn-delete'));
        //const button = nativeElement.querySelector(".btn-delete");
        button.triggerEventHandler('click', null);
        expect(testHost.recieveData).toEqual(mockCourse.id);
    });

});