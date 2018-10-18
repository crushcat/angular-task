import { Component, OnInit } from '@angular/core';
import { Course } from '../../entites';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'at-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  mockCourseList : ICourse[] = [
    {
      id: 0,
      title: 'Webpack',
      creationDate: Date.now(),
      duration: 90,
      description: 'fsdfndsfsdionfklsdfklsd'
    },
    {
      id: 1,
      title: 'TypeScript',
      creationDate: Date.now(),
      duration: 60,
      description: 'fsdfndsfsdionfklsdfklsd'
    },
    {
      id: 2,
      title: 'Angular Intro',
      creationDate: Date.now(),
      duration: 60,
      description: 'fsdfndsfsdionfklsdfklsd'
    }
  ];
  courseList: ICourse[] = [];

  constructor() { }

  ngOnInit() {
    this.courseList = this.mockCourseList.map((item: ICourse) => {
      return new Course(item);
    });
  }

  loadMore() {
    console.log("loadMore");
  }

  deleteCourse(data) {
    console.log(data)
  }

}
