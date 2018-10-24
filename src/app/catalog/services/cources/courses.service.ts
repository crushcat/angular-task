import { Injectable } from '@angular/core';
import { ICourse } from '../../interfaces'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const SERVER_URL = "http://localhost:3004/courses"
const COUNT_COURSES = 3;

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseList: ICourse[];

  createCourse(course: ICourse) : Observable<any> {
    return this.http.post<ICourse[]>(SERVER_URL, course);
  }

  getCourseById(id: string) {
    return this.http.get<ICourse[]>(SERVER_URL, {params: {id}});
  }

  updateCourse(course: ICourse) {
    this.courseList = this.courseList.map((item) => {
      if(item.id == course.id) item = course;
      return item;
    })
  }

  deleteCourse(id: number) : Observable<any> {
    //this.courseList = this.courseList.filter((item) => item.id != id);
    return this.http.delete<any>(`${SERVER_URL}/${id}`)
  }

  getCourses(pageNumber: number, textFragment?: string) : Observable<ICourse[]> {
    const params = {
      start: '0', 
      count: `${COUNT_COURSES * pageNumber}`,
      sort: 'date',
    };
    if(textFragment) return this.http.get<ICourse[]>(SERVER_URL, { params: {...params, textFragment}});
    return this.http.get<ICourse[]>(SERVER_URL, {params: params});
  }

  constructor(private http: HttpClient) { }
}
