import { Component, OnInit } from '@angular/core';
import { Course } from '../../entites';
import { ICourse } from '../../interfaces';
import { SearchPipe } from '../../pipes/search/search.pipe';
import { CoursesService } from '../../services/cources/courses.service';

@Component({
  selector: 'at-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [SearchPipe, CoursesService]
})
export class CatalogComponent implements OnInit {
  courseList: ICourse[] = [];

  loadMore() {
    console.log("loadMore");
  }

  deleteCourse(data) {
    const result: boolean = window.confirm("Are you sure?");
    if(result) {
      this._coursesService.deleteCourse(data);
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
    private _coursesService: CoursesService
    ) { }
}