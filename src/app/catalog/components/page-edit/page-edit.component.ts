import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../interfaces';
import { CoursesService } from '../../services/cources/courses.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'at-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss']
})
export class PageEditComponent implements OnInit { 
  public id: string;
  public courseSub: Subscription
  public course: ICourse;
  public title: string;

  save(data) {
    this.courseService.updateCourse(data);
    this.back();
  }

  cancel() {
    this.back();
  }

  ngOnInit() {
    this.router.params.subscribe((data) => {
      this.id = data.id;
      this.courseSub = this.courseService.getCourseById(this.id)
          .subscribe((item) => {
            this.course = item[0];
          }, (error: HttpErrorResponse) => console.error(error));
      this.title = `Courses/${this.course.name}`;
    });
  }

  back() {
    this.location.back();
  }

  constructor(
    private courseService: CoursesService,
    private router: ActivatedRoute,
    private location: Location
    ) { }
}
