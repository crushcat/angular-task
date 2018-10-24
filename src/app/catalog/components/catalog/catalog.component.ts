import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../interfaces';
import { SearchPipe } from '../../pipes/search/search.pipe';
import { CoursesService } from '../../services/cources/courses.service';
import { Router } from '@angular/router'
import { Observable, Subscription } from 'rxjs';
import { Course } from '../../entites';

@Component({
  selector: 'at-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [SearchPipe],
})
export class CatalogComponent implements OnInit {
  coursesListSub: Subscription;
  deleteCoursesSub: Subscription;
  courseList: ICourse[] = [];
  backupList: ICourse[];
  title: string = 'Courses';
  pageNumbers: number = 1;

  loadMore() {
    this.pageNumbers++;
    this.loadCourses();
  }

  editCourse(data) {
    this.router.navigateByUrl(`catalog/${data}`);
  }

  deleteCourse(data) {
    const result: boolean = window.confirm("Are you sure?");
    if(result) {
      this.deleteCoursesSub = this.coursesService.deleteCourse(data)
        .subscribe((data) => {
          this.loadCourses();
      }, (error) => {
        console.warn(error);
      });
    }
  }

  search(data) {
    if(!data) this.courseList = [...this.backupList];
    this.loadCourses(data);
    this.courseList = this._searchPipe.transform(this.courseList, data);
  }

  loadCourses(textFragment?: string) {
    this.coursesListSub = this.coursesService.getCourses(this.pageNumbers, textFragment)
      .subscribe((data) => {
        if(data) {
          this.courseList = data.map((item) => new Course(item));
          this.backupList = [...this.courseList];
        }
    }, (error) => {
      console.warn(error);
    });
  }

  ngOnInit() {
    this.loadCourses();
  }

  constructor(
    private _searchPipe: SearchPipe,
    private coursesService: CoursesService,
    private router: Router
    ) { }
}