import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CoursesService } from '../../services/cources/courses.service';
import { ICourse } from '../../interfaces';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

enum Course {
  name = 'Example titile',
  description = 'Description',
  date = '1999-02-24',
  length = '0',
  authors = 'Some authors'
}

@Component({
  selector: 'at-page-add',
  templateUrl: './page-add.component.html',
  styleUrls: ['./page-add.component.scss']
})
export class PageAddComponent {
  saveCourseSub: Subscription;
  course = Course;

  save(data) {
    this.saveCourseSub = this.courseService.createCourse(data)
      .subscribe((item) => {
        console.log(item);
      }, (error: HttpErrorResponse) => console.error(error));
    this.back();
  }

  cancel() {
    this.back();
  }

  back() {
    this.location.back();
  }

  constructor(
    private courseService: CoursesService,
    private location: Location
    ) { }
}
