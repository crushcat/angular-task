import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../interfaces';
import { SearchPipe } from '../../pipes/search/search.pipe';
import { CoursesService } from '../../services/cources/courses.service';
import { Router } from '@angular/router'

@Component({
  selector: 'at-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [SearchPipe],
})
export class CatalogComponent implements OnInit {
  courseList: ICourse[];

  loadMore() {
    console.log("loadMore");
  }

  editCourse(data) {
    this.router.navigateByUrl(`catalog/${data}`);
  }

  deleteCourse(data) {
    const result: boolean = window.confirm("Are you sure?");
    if(result) {
      this._coursesService.deleteCourse(data);
      this.courseList = this._coursesService.getCourses();
    }
  }

  search(data) {
    if(!data) this.courseList = this._coursesService.getCourses();
    this.courseList = this._searchPipe.transform(this.courseList, data);
  }

  ngOnInit() {
    this.courseList = this._coursesService.getCourses();
  }

  constructor(
    private _searchPipe: SearchPipe,
    private _coursesService: CoursesService,
    private router: Router
    ) { }
}