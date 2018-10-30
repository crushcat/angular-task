import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICourse } from '../../interfaces';
import { CoursesService } from '../../services/cources/courses.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingService } from 'src/app/core/services/loadingService/loading.service';

@Component({
  selector: 'at-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss']
})
export class PageEditComponent implements OnInit, OnDestroy { 
  public id: string;
  public courseSub: Subscription;
  public updateSub: Subscription;
  public course: ICourse;
  public title: string;

  save(data) {
    this.updateSub = this.courseService.updateCourse(data)
        .subscribe((data) => {
          console.log(data);
        });
    this.back();
  }

  cancel() {
    this.back();
  }

  back() {
    this.location.back();
  }

  ngOnInit() {
    this.router.params.subscribe((data) => {
      this.id = data.id;
      this.courseSub = this.courseService.getCourseById(this.id)
          .subscribe((item) => {
            this.loader.set(false);
            this.course = item[0];
            this.title = `${this.location.path().split('/')[1]}/${this.course.name}`;
          }, (error: HttpErrorResponse) => console.error(error));
    });
  }

  ngOnDestroy() {
    this.courseSub.unsubscribe();
    if(this.updateSub) this.updateSub.unsubscribe();
  }

  constructor(
    private courseService: CoursesService,
    private router: ActivatedRoute,
    private location: Location,
    private loader: LoadingService
    ) { }
}
