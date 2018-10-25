import { Injectable } from '@angular/core';
import { ICourse } from '../../interfaces'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loadingService/loading.service';

const SERVER_URL = "http://localhost:3004/courses"
const COUNT_COURSES = 3;

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseList: ICourse[];

  createCourse(course: ICourse) : Observable<any> {
    this.loader.set(true);
    return this.http.post<ICourse[]>(SERVER_URL, course);
  }

  getCourseById(id: string) {
    this.loader.set(true);
    return this.http.get<ICourse[]>(SERVER_URL, {params: {id}});
  }

  updateCourse(course: ICourse): Observable<any> {
    this.loader.set(true);
    return this.http.patch<any>(`${SERVER_URL}/${course.id}`, course);
  }

  deleteCourse(id: number) : Observable<any> {
    this.loader.set(true);
    return this.http.delete<any>(`${SERVER_URL}/${id}`)
  }

  getCourses(pageNumber: number, textFragment?: string) : Observable<ICourse[]> {
    const params = {
      start: '0', 
      count: `${COUNT_COURSES * pageNumber}`,
      sort: 'date',
    };
    this.loader.set(true);
    if(textFragment) return this.http.get<ICourse[]>(SERVER_URL, { params: {...params, textFragment}});
    return this.http.get<ICourse[]>(SERVER_URL, {params: params});
  }

  constructor(
    private http: HttpClient,
    private loader: LoadingService
    ) { }
}
