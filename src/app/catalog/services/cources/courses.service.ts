import { Injectable } from '@angular/core';
import { ICourse } from '../../interfaces'
import { Course } from '../../entites'

const mockCourseList : ICourse[] = [
  {
    id: 0,
    title: 'Webpack',
    creationDate: new Date('October 1, 2018 03:24:00'),
    duration: 90,
    description: 'fsdfndsfsdionfklsdfklsd',
    topRated: true
  },
  {
    id: 1,
    title: 'TypeScript',
    creationDate: new Date('October 19, 2018 03:24:00'),
    duration: 60,
    description: 'fsdfndsfsdionfklsdfklsd',
    topRated: false
  },
  {
    id: 2,
    title: 'Angular Intro',
    creationDate: new Date('October 20, 2018 03:24:00'),
    duration: 20,
    description: 'fsdfndsfsdionfklsdfklsd',
    topRated: false
  }
];


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseList: ICourse[];

  constructor() {
    this.courseList = mockCourseList.map((item: ICourse) => new Course(item));
  }

  createCourse(course: ICourse) {
    this.courseList = [...this.courseList, new Course(course)];
  }

  getCourseById(id: number) {
    return this.courseList.filter((item) => item.id = id)[0];
  }

  updateCourse(course: ICourse) {
    // do some stuff
  }

  deleteCourse(id: number) {
    this.courseList = this.courseList.filter((item) => item.id != id);
  }

  getCourses() {
    return this.courseList;
  }

}
